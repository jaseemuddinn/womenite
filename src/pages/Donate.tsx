import React, { useState } from 'react';
import axios from 'axios';
import { Heart, Shield, CheckCircle, Gift, Loader } from 'lucide-react';

// Extend Window interface for Razorpay
declare global {
  interface Window {
    Razorpay: any;
  }
}

const Donate = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    amount: '',
    donationType: 'one-time',
    receiveUpdates: false
  });
  
  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const donationOptions = [
    { amount: 500, impact: "Provides sanitary pads for 2 women for 3 months" },
    { amount: 1000, impact: "Funds digital literacy training for 1 woman" },
    { amount: 2500, impact: "Sponsors skill training materials for 5 women" },
    { amount: 5000, impact: "Supports a woman's complete 3-month vocational training" },
    { amount: 10000, impact: "Funds self-defense training for 20 women" },
    { amount: 25000, impact: "Sponsors a complete leadership development program" }
  ];

  const impactAreas = [
    {
      icon: Heart,
      title: "Health & Hygiene",
      description: "Menstrual health education and sanitary product distribution",
      percentage: 30
    },
    {
      icon: Shield,
      title: "Safety & Security",
      description: "Self-defense training and women's helpline operations",
      percentage: 25
    },
    {
      icon: Gift,
      title: "Skill Development",
      description: "Vocational training and entrepreneurship support",
      percentage: 35
    },
    {
      icon: CheckCircle,
      title: "Operations",
      description: "Administrative costs and program management",
      percentage: 10
    }
  ];

  const trustFeatures = [
    "80G Tax Exemption Certificate",
    "FCRA Registered NGO",
    "Transparent Fund Usage",
    "Regular Impact Reports",
    "Secure Payment Gateway",
    "Direct Impact Tracking"
  ];

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Handle preset amount selection
  const handleAmountSelect = (amount: number) => {
    setFormData(prev => ({ ...prev, amount: amount.toString() }));
  };

  // Validate form
  const validateForm = () => {
    if (!formData.name.trim()) {
      setError('Please enter your full name');
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }
    if (!formData.phone.trim() || !/^\+?[\d\s-()]{10,15}$/.test(formData.phone)) {
      setError('Please enter a valid phone number');
      return false;
    }
    if (!formData.amount || parseInt(formData.amount) < 1) {
      setError('Please enter a donation amount of at least ₹1');
      return false;
    }
    return true;
  };

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Test backend connectivity
  const testBackend = async () => {
    try {
      console.log('🔍 Testing backend connectivity...');
      const response = await axios.get('http://localhost:3000');
      console.log('✅ Backend is accessible:', response.data);
      setError('Backend is accessible! ✅');
    } catch (error: any) {
      console.error('❌ Backend test failed:', error);
      if (error.code === 'ERR_NETWORK') {
        setError('❌ Backend not running on http://localhost:3000');
      } else {
        setError(`❌ Backend error: ${error.message}`);
      }
    }
  };

  // Handle donation
  const handleDonate = async () => {
    console.log('🔵 Donate button clicked!');
    console.log('📝 Form data:', formData);
    
    setError('');
    
    // Validate form
    if (!validateForm()) {
      console.log('❌ Form validation failed');
      return;
    }
    
    console.log('✅ Form validation passed');
    setIsLoading(true);

    try {
      console.log('🌐 Loading Razorpay script...');
      
      // Load Razorpay script if not already loaded
      if (!window.Razorpay) {
        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded) {
          throw new Error('Failed to load Razorpay SDK');
        }
        console.log('✅ Razorpay script loaded');
      } else {
        console.log('✅ Razorpay already available');
      }

      console.log('📤 Creating order on backend...');
      
      // Create order on backend
      const orderResponse = await axios.post('http://localhost:3000/create-order', {
        amount: parseInt(formData.amount), // Backend will convert to paise
        currency: 'INR',
        receipt: `donation_${Date.now()}`,
        donor: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone
        }
      });

      console.log('✅ Order created:', orderResponse.data);
      const { order_id, key_id, amount } = orderResponse.data;

      // Razorpay options
      const options = {
        key: key_id,
        amount: amount,
        currency: 'INR',
        name: 'womenite',
        description: 'Donation for Women Empowerment',
        order_id: order_id,
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#fd8f45',
        },
        handler: async function (response: any) {
          console.log('💳 Payment successful:', response);
          try {
            console.log('🔍 Verifying payment...');
            
            // Verify payment on backend
            const verifyResponse = await axios.post('http://localhost:3000/verify-payment', {
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_order_id: response.razorpay_order_id,
              razorpay_signature: response.razorpay_signature,
              donorInfo: {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                amount: parseInt(formData.amount),
                donationType: formData.donationType,
                receiveUpdates: formData.receiveUpdates
              }
            });

            console.log('✅ Payment verified:', verifyResponse.data);

            if (verifyResponse.data.success) {
              setShowSuccess(true);
              // Reset form
              setFormData({
                name: '',
                email: '',
                phone: '',
                amount: '',
                donationType: 'one-time',
                receiveUpdates: false
              });
            } else {
              throw new Error('Payment verification failed');
            }
          } catch (error) {
            console.error('❌ Payment verification error:', error);
            setError('Payment verification failed. Please contact support.');
          } finally {
            setIsLoading(false);
          }
        },
        modal: {
          ondismiss: function () {
            console.log('❌ Payment modal dismissed');
            setIsLoading(false);
            setError('Payment was cancelled');
          },
        },
      };

      console.log('🚀 Opening Razorpay checkout...');
      
      // Open Razorpay checkout
      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error: any) {
      console.error('❌ Donation error:', error);
      
      if (error.code === 'ERR_NETWORK') {
        setError('Cannot connect to backend server. Please ensure your backend is running on http://localhost:3000');
      } else if (error.response?.status === 404) {
        setError('Backend endpoint not found. Please check your server routes.');
      } else if (error.response?.status === 500) {
        setError('Backend server error. Please check your server logs.');
      } else {
        setError(error.response?.data?.message || error.message || 'Failed to process donation. Please try again.');
      }
      
      setIsLoading(false);
    }
  };

  // Success modal
  if (showSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-lg p-8 max-w-md mx-auto text-center shadow-lg">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Thank You for Your Donation!</h2>
          <p className="text-gray-600 mb-6">
            Your generous contribution will help us empower more women. 
            You'll receive a receipt via email shortly.
          </p>
          <a
            href="https://rzp.io/rzp/sw35Gxt"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#fd8f45] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors inline-block"
          >
            Donate Again
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Your donation directly transforms women's lives. Every contribution helps us provide education, healthcare, and opportunities for empowerment.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-2xl font-bold mb-2">25,000+ Women Empowered</p>
            <p className="text-orange-100">Thanks to supporters like you</p>
          </div>
        </div>
      </section>

      {/* Donate Button Only */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <a
              href="https://rzp.io/rzp/sw35Gxt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#fd8f45] text-white px-10 py-6 rounded-xl font-bold text-2xl shadow-lg hover:bg-[#e67c3a] transition-colors"
            >
              Donate Securely Now
            </a>
            <p className="text-center text-sm text-gray-600 mt-4">
              Secure payment powered by Razorpay. Your transaction is protected with bank-level encryption.
            </p>
          </div>
        </div>
      </section>

      {/* How Funds Are Used */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How Your <span className="text-[#fd8f45]">Donation</span> Helps
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We believe in complete transparency. Here's exactly how your contribution is used to create maximum impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="bg-[#fd8f45] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                  <p className="text-gray-600 mb-4">{area.description}</p>
                  <div className="text-2xl font-bold text-[#fd8f45]">{area.percentage}%</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Trust <span className="text-[#fd8f45]">womenite</span>?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Your trust is sacred to us. We maintain the highest standards of transparency and accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gray-50 rounded-lg p-8 max-w-2xl mx-auto">
              <h3 className="text-xl font-bold text-gray-800 mb-4">100% Secure Payments</h3>
              <p className="text-gray-600">
                We use industry-standard encryption and secure payment processing. Your personal and financial information is never stored on our servers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate;

