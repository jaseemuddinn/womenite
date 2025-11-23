import React from 'react';
import { FileText, Download, Calendar, Eye } from 'lucide-react';

const Documents = () => {
  const documentCategories = [
    {
      title: "Legal & Registration Documents",
      description: "Official registration certificates, compliance documents, and legal frameworks",
      documents: [
        {
          name: "Womenite 80G Tax Exemption Certificate",
          description: "Tax exemption certificate for donors under Section 80G",
          fileSize: "55 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite 80G new.pdf"
        },
        {
          name: "Womenite 12A Registration Certificate",
          description: "Registration certificate under Section 12A of Income Tax Act",
          fileSize: "65 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite 12A new.pdf"
        },
        {
          name: "Womenite FCRA Registration Certificate",
          description: "Foreign Contribution Regulation Act registration certificate",
          fileSize: "30 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite FCRA Registration-Certificate.pdf"
        },
        {
          name: "Womenite TAN Certificate",
          description: "Tax Deduction Account Number certificate",
          fileSize: "461 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite TAN.pdf"
        },
        {
          name: "Womenite CSR Form 1",
          description: "Corporate Social Responsibility compliance form",
          fileSize: "74 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite CSR 1 form.PDF"
        }
      ]
    },
    {
      title: "Audit Reports",
      description: "Independent financial audits and compliance reports",
      documents: [
        {
          name: "Audited Balance Sheet FY 2023-24",
          description: "Audited Balance Sheet and Financial Statements for Financial Year 2023-24",
          fileSize: "1.2 MB",
          date: "2023-24",
          type: "PDF",
          downloadUrl: "/document/Audited BS FY 23 - 24.pdf"
        },
        {
          name: "Audited Balance Sheet 2022-23",
          description: "Audited Balance Sheet and Financial Statements for 2022-23",
          fileSize: "1.1 MB",
          date: "2022-23",
          type: "PDF",
          downloadUrl: "/document/Audited BS 2022-23.pdf"
        },
        {
          name: "Audited Balance Sheet 2021-22",
          description: "Audited Balance Sheet and Financial Statements for 2021-22",
          fileSize: "1.0 MB",
          date: "2021-22",
          type: "PDF",
          downloadUrl: "/document/Audited BS 2021-22.pdf"
        },
        {
          name: "Audited Balance Sheet 2020-21",
          description: "Audited Balance Sheet and Financial Statements for 2020-21",
          fileSize: "950 KB",
          date: "2020-21",
          type: "PDF",
          downloadUrl: "/document/Audited BS 2020-21.pdf"
        },
        {
          name: "Income Tax Return FY 2019-20",
          description: "Income Tax Return filing for Financial Year 2019-20",
          fileSize: "800 KB",
          date: "2019-20",
          type: "PDF",
          downloadUrl: "/document/Womenite ITR FY19-20.pdf"
        }
      ]
    },
    {
      title: "Policies & Procedures",
      description: "Organizational policies and procedural guidelines",
      documents: [
        {
          name: "Financial Management Policy",
          description: "Comprehensive financial management and fiscal responsibility policy",
          fileSize: "850 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite FInancial Management.pdf"
        },
        {
          name: "Human Resource Development Policy",
          description: "HR policies covering recruitment, development, and employee welfare",
          fileSize: "750 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Policy Human Resource Development.pdf"
        },
        {
          name: "Procurement Policy",
          description: "Guidelines for procurement processes and vendor management",
          fileSize: "650 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Policy Procurement.pdf"
        },
        {
          name: "Prevention of Sexual Harassment (PoSH) Policy",
          description: "Policy ensuring safe and harassment-free workplace environment",
          fileSize: "600 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/PoSH.pdf"
        },
        {
          name: "Conflict Management Policy",
          description: "Guidelines for conflict resolution and grievance handling",
          fileSize: "550 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Policy Conflict Management.pdf"
        },
        {
          name: "Leave Policy",
          description: "Employee leave policies and procedures",
          fileSize: "500 KB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Policy Leave.pdf"
        }
      ]
    },
    {
      title: "Annual Reports",
      description: "Comprehensive yearly reports showcasing our impact and achievements",
      documents: [
        {
          name: "Womenite AY 22-23 Report",
          description: "Academic Year 2022-23 comprehensive annual report with program highlights and impact",
          fileSize: "2.5 MB",
          date: "2023",
          type: "PDF",
          downloadUrl: "/document/Womenite AY 22-23 Report.pdf"
        },
        {
          name: "Womenite 2022 Annual Report",
          description: "Annual report for 2022 showcasing our programs, impact, and organizational growth",
          fileSize: "2.3 MB",
          date: "2022",
          type: "PDF",
          downloadUrl: "/document/Womenite 2022 Annual Report.pdf"
        },
        {
          name: "Womenite 2021 Annual Report",
          description: "Annual report for 2021 highlighting our initiatives and community impact",
          fileSize: "2.1 MB",
          date: "2021",
          type: "PDF",
          downloadUrl: "/document/Womenite 2021 Annual Report.pdf"
        },
        {
          name: "Womenite 2020 Annual Report",
          description: "Annual report for 2020 documenting our resilience and continued service during challenging times",
          fileSize: "1.9 MB",
          date: "2020",
          type: "PDF",
          downloadUrl: "/document/Womenite 2020 Annual Report.pdf"
        },
        {
          name: "Womenite 2019 Annual Report",
          description: "Annual report for 2019 showcasing program expansion and increased community reach",
          fileSize: "1.8 MB",
          date: "2019",
          type: "PDF",
          downloadUrl: "/document/Womenite 2019 Annual Report.pdf"
        },
        {
          name: "Womenite 2018 Annual Report",
          description: "Annual report for 2018 highlighting our foundation years and early achievements",
          fileSize: "1.6 MB",
          date: "2018",
          type: "PDF",
          downloadUrl: "/document/Womenite 2018 Annual Report.pdf"
        }
      ]
    },
    {
      title: "Project Reports",
      description: "Detailed reports from our various programs and project implementations",
      documents: [
        {
          name: "Closure Report - NICSI Partnership",
          description: "Project closure report for our collaboration with NICSI (National Informatics Centre Services Inc.)",
          fileSize: "1.2 MB",
          date: "2024",
          type: "PDF",
          downloadUrl: "/document/Closure Report_NICSI_Womenite.pdf"
        },
        {
          name: "HCL My Clean City - Closure Report",
          description: "Final project report for the HCL My Clean City initiative focusing on community cleanliness and awareness",
          fileSize: "1.5 MB",
          date: "2024",
          type: "PDF",
          downloadUrl: "/document/HCL My Clean City_Closure_Report.pdf"
        },
        {
          name: "Naari ki Chaupal Report",
          description: "Comprehensive report on our women's community gathering and empowerment program",
          fileSize: "2.1 MB",
          date: "2024",
          type: "PDF",
          downloadUrl: "/document/Naari ki Chaupal report.pdf"
        },
        {
          name: "Safe-Unsafe Touch Workshops Report",
          description: "Project report on workshops conducted in 25 schools on child safety and awareness",
          fileSize: "1.8 MB",
          date: "2024",
          type: "PDF",
          downloadUrl: "/document/Project reportWorkshops on safe-unsafe touch in 25 schools.pdf"
        },
        {
          name: "Udaan Project Updated Report",
          description: "Updated comprehensive report on our Udaan women empowerment and skill development program",
          fileSize: "2.3 MB",
          date: "2024",
          type: "PDF",
          downloadUrl: "/document/Udaan updated report.pdf"
        },
        {
          name: "Van Mahotsav 2018 Report",
          description: "Environmental initiative report from our tree plantation and awareness campaign in 2018",
          fileSize: "1.4 MB",
          date: "2018",
          type: "PDF",
          downloadUrl: "/document/Van Mahotsav 2018.pdf"
        },
        {
          name: "Mushroom se Udaan Project",
          description: "Detailed report on our mushroom cultivation and women entrepreneurship development project",
          fileSize: "1.9 MB",
          date: "2024",
          type: "PDF",
          downloadUrl: "/document/Womenite Mushroom se Udaan Project.pdf"
        }
      ]
    },
    {
      title: "News & Media",
      description: "Latest news, press releases, and media coverage",
      documents: [
        {
          name: "Womenite News",
          description: "Latest news and updates about Womenite activities",
          fileSize: "2.8 MB",
          date: "Current",
          type: "PDF",
          downloadUrl: "/document/Womenite News.pdf"
        }
      ]
    },
    {
      title: "Testimonials & Impact Stories",
      description: "Real stories and testimonials from beneficiaries and community members",
      documents: [
        {
          name: "Womenite Testimonials 2025",
          description: "Collection of testimonials and impact stories from women and communities we've served",
          fileSize: "1.5 MB",
          date: "2025",
          type: "PDF",
          downloadUrl: "/document/Womenite Testimonials 2025.pdf"
        }
      ]
    }
  ];

  const handleDownload = (url: string, fileName: string) => {
    // Trigger actual download
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (url: string, fileName: string) => {
    // Open PDF in new tab for preview
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#fd8f45] to-[#e67c3a] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Documents & Reports</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Access our comprehensive collection of reports, certificates, and program documentation. 
            We believe in complete transparency and accountability.
          </p>
          <div className="bg-white bg-opacity-20 rounded-lg p-6 max-w-md mx-auto">
            <p className="text-2xl font-bold mb-2">100% Transparent</p>
            <p className="text-orange-100">All documents available for public access</p>
          </div>
        </div>
      </section>

      {/* Documents Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-[#fd8f45]">Document</span> Library
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Browse through our organized collection of documents. All reports are audited and verified 
              for accuracy and transparency.
            </p>
          </div>

          <div className="space-y-12">
            {documentCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-lg shadow-lg p-8">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.documents.map((doc, docIndex) => (
                    <div key={docIndex} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-[#fd8f45] bg-opacity-10 p-2 rounded-lg">
                            <FileText className="h-6 w-6 text-[#fd8f45]" />
                          </div>
                          <div>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {doc.type}
                            </span>
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{doc.fileSize}</span>
                      </div>

                      <h4 className="text-lg font-semibold text-gray-800 mb-2">{doc.name}</h4>
                      <p className="text-gray-600 text-sm mb-4">{doc.description}</p>

                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{doc.date}</span>
                        </div>
                      </div>

                      <div className="sm:flex-col md:flex-row md:flex md:space-x-2 space-y-2 md:space-y-0">
                        <button
                          onClick={() => handlePreview(doc.downloadUrl, doc.name)}
                          className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors w-full flex items-center justify-center space-x-2"
                        >
                          <Eye className="h-4 w-4" />
                          <span>Preview</span>
                        </button>
                        <button
                          onClick={() => handleDownload(doc.downloadUrl, doc.name)}
                          className="flex-1 bg-[#fd8f45] text-white px-4 py-2 rounded-lg w-full hover:bg-[#e67c3a] transition-colors flex items-center justify-center space-x-2"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Documents Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Need Additional <span className="text-[#fd8f45]">Documents</span>?
            </h2>
            <p className="text-gray-600 mb-8">
              If you need specific documents or reports that are not listed here, 
              please contact us and we'll be happy to provide them.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4 justify-center">
              <a
                href="/contact"
                className="inline-block bg-[#fd8f45] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#e67c3a] transition-colors"
              >
                Request Documents
              </a>
              <a
                href="mailto:Hr@womenite.com"
                className="inline-block border-2 border-[#fd8f45] text-[#fd8f45] px-8 py-3 rounded-lg font-semibold hover:bg-[#fd8f45] hover:text-white transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documents; 