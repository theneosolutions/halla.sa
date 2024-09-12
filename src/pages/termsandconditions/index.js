import { Template1 } from "@/app/components/layouts";
import {
  Feachers,
  TopTrends,
  Pricing,
  Download,
  HomeSection,
  TextSection,
  Contact,
} from "@/app/components/sections";
import { Link as ScrollLink, Element } from "react-scroll";
export default function Home() {
  return (
    <Element name="home">
      <Template1>
        <div className="py-10 md:py-20  px-4 sm:px-6 md:px-10 lg:px-14 xl:px-24 ">
          <div className="items-center justify-center flex text-3xl mb-10 text-center">
            <h1>Terms and Conditions of Halla App</h1>
          </div>
          <Paragraph
            heading="Introduction"
            dis='These Terms and Conditions ("Terms") govern the use of the Halla app ("App" or "Halla") and its associated services, including but not limited to sending electronic invitations ("e-invitations"). By using the App, you agree to be bound by these Terms.'
          />
          <Paragraph
            heading="Scope of Service"
            dis="Halla is an online platform that allows users to create and send e-invitations to their guests. The App is designed to facilitate the creation, sending, and management of e-invitations for various events and occasions."
          />
          <Paragraph
            heading="User Accounts"
            dis="To use the App, you must create a user account. You are responsible for maintaining the confidentiality and security of your account and password. You agree to provide accurate and complete information when creating your account and to update such information as necessary."
          />
          <Paragraph
            heading="Content and Intellectual Property"
            dis="You retain ownership of any content you upload or create using the App. However, by uploading or creating content, you grant Halla a non-exclusive, worldwide, royalty-free license to use, modify, and distribute such content solely for the purpose of providing the Apps services."
          />
          <Paragraph
            heading="Prohibited Use"
            dis="By agreeing to these Terms and Conditions, you commit to not using the Halla app for any illegal or unauthorized purposes. This section outlines some specific activities that are prohibited, but it is not an exhaustive list. If you engage in any activities that are not explicitly listed here but are determined to be illegal, unauthorized, or harmful to the app, its users, or its services, Halla reserves the right to take appropriate action, including terminating your account and pursuing legal remedies"
          />
          <div>
            <ol className="list-decimal text-sm text-gray-700 ml-10 md:ml-20 py-2 space-y-2">
              {listItems.map((item, index) => (
                <OrderList heading={item.heading} dis={item.des} />
              ))}
            </ol>
          </div>
          <Paragraph dis="By adhering to these guidelines, you help ensure that the Halla app remains a safe, respectful, and enjoyable platform for all users. If you observe any users engaging in activities that violate these Terms and Conditions, please report them to Halla’s support team for further investigation." />

          <Paragraph
            heading="Payment Terms"
            dis="The App may offer in-app purchases or subscription-based services. You agree to pay all fees and charges associated with your use of the App, including any applicable taxes."
          />
          <Paragraph
            heading="Warranty Disclaimer"
            dis='The App is provided on an "as is" and "as available" basis, without warranties of any kind, express or implied.'
          />
          <Paragraph
            heading="Limitation of Liability"
            dis="In no event shall Halla be liable for any damages, including but not limited to incidental, consequential, or punitive damages, arising out of or in connection with your use of the App."
          />
          <Paragraph
            heading="Governing Law and Jurisdiction"
            dis="These Terms shall be governed by and construed in accordance with the laws of the Kingdom of Saudi Arabia. Any disputes arising out of or in connection with these Terms shall be resolved through arbitration in accordance with the rules of the Saudi Center for Commercial Arbitration."
          />
          <Paragraph
            heading="Compliance with Saudi Laws "
            dis="As a responsible and law-abiding app, Halla is committed to complying with all applicable laws and regulations in the Kingdom of Saudi Arabia. This section highlights some of the key laws and regulations that Halla adheres to, but it is not an exhaustive list."
          />
          <div>
            <ol className="list-decimal text-sm text-gray-700 ml-10 md:ml-20 py-2 space-y-2">
              {listItems2.map((item, index) => (
                <OrderList heading={item.heading} dis={item.des} />
              ))}
            </ol>
          </div>
          <Paragraph dis="By complying with these laws and regulations, Halla demonstrates its commitment to operating in a responsible and ethical manner, and to providing a safe and trustworthy platform for its users." />

          <Paragraph
            heading="Changes to Terms "
            dis="Halla reserves the right to modify or update these Terms at any time without notice. Your continued use of the App after any changes to these Terms constitutes your acceptance of such changes."
          />
          <Paragraph
            heading="Contact Us "
            dis="If you have any questions or concerns about these Terms, please contact us."
          />
        </div>
      </Template1>
    </Element>
  );
}

function Paragraph({ heading, dis }) {
  return (
    <div className="mt-2">
      <div className="text-md font-semibold">{heading}</div>
      <p className="text-sm text-gray-700 mt-1 leading-7">{dis}</p>
    </div>
  );
}

function OrderList({ heading, dis }) {
  return (
    <li className="text-sm text-gray-700 mt-1 leading-7 ">
      <span className="font-semibold text-md text-gray-900">{heading}</span>
      {" " + dis}
    </li>
  );
}

// Define the list items
const listItems = [
  {
    heading: "Sending unsolicited or spam invites:",
    des: "You agree not to use the Halla app to send any unauthorized or unsolicited invites, including spam, commercial advertisements, or promotional materials, to other users or third parties without their explicit consent. This includes sending invitations to events or occasions that the recipient has not expressed interest in attending.",
  },
  {
    heading: "Uploading or transmitting viruses or malware:",
    des: "You are prohibited from knowingly introducing any viruses, malware, or other malicious software into the Halla app or its associated services. This type of behavior can harm the app, its users, and its services, and is strictly prohibited.",
  },
  {
    heading: "Interfering with or disrupting the App's services:",
    des: "Any activities intended to disrupt or interfere with the normal operation of the Halla app, including but not limited to denial-of-service attacks, unauthorized access to Halla’s systems, or manipulating app data, are strictly prohibited.",
  },
  {
    heading:
      "Violating the rights of others, including intellectual property rights:",
    des: "You must respect the intellectual property rights of others when using the Halla app. This means you cannot use the app to upload, transmit, or distribute any content that infringes on the copyrights, trademarks, patents, or other intellectual property rights of third parties. If you are unsure whether your use of certain content would constitute an infringement, it is recommended that you consult with a legal professional before proceeding.",
  },
];
const listItems2 = [
  {
    heading: "The Anti-Cyber Crime Law:",
    des: "Halla complies with the Anti-Cyber Crime Law, which aims to combat cybercrimes and protect the Kingdom's cyber infrastructure. This law criminalizes activities such as hacking, unauthorized access to computer systems, and the spread of malware. Halla takes measures to prevent and detect cybercrimes and cooperates with law enforcement agencies to report and investigate any incidents.",
  },
  {
    heading: "The Electronic Transactions Law:",
    des: "Halla complies with the Electronic Transactions Law, which regulates electronic transactions and provides a legal framework for online activities. This law ensures that electronic transactions are secure, reliable, and trustworthy, and Halla adheres to its provisions to ensure the integrity of its services.",
  },
  {
    heading: "The Personal Data Protection Law:",
    des: "Halla complies with the Personal Data Protection Law, which aims to protect the privacy and personal data of individuals in the Kingdom. This law regulates the collection, processing, and storage of personal data, and Halla takes measures to ensure that user data is handled in accordance with its provisions.",
  },
  {
    heading: "The Consumer Protection Law: ",
    des: "Halla complies with the Consumer Protection Law, which aims to protect the rights of consumers in the Kingdom. This law regulates business practices, including advertising, pricing, and sales, and Halla adheres to its provisions to ensure fair and transparent dealings with its users.",
  },
];
