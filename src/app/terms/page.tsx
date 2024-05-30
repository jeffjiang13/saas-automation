import React from 'react';
import Footer from '@/components/global/footer';
import Navbar from '@/components/global/NavbarWrapper';

const TermsOfServicePage: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center mt-20">
      <Navbar />
      <div className="w-full max-w-6xl p-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="prose lg:prose-xl">
          <strong>Effective date: May 30, 2024</strong>
          <p>Welcome to ZapFlow!</p>
          <p>
            These terms and conditions outline the rules and regulations for the use of ZapFlow&apos;s Website, located at https://jj-zapflow.vercel.app.
          </p>
          <p>
            By accessing this website we assume you accept these terms and conditions. Do not continue to use ZapFlow if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Cookies</h2>
          <p>
            We employ the use of cookies. By accessing ZapFlow, you agreed to use cookies in agreement with the ZapFlow&apos;s Privacy Policy.
          </p>
          <p>
            Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
          </p>

          <h2 className="text-2xl font-semibold mt-8">License</h2>
          <p>
            Unless otherwise stated, ZapFlow and/or its licensors own the intellectual property rights for all material on ZapFlow. All intellectual property rights are reserved. You may access this from ZapFlow for your own personal use subjected to restrictions set in these terms and conditions.
          </p>
          <p>You must not:</p>
          <ul className="list-disc list-inside">
            <li>Republish material from ZapFlow</li>
            <li>Sell, rent, or sub-license material from ZapFlow</li>
            <li>Reproduce, duplicate or copy material from ZapFlow</li>
            <li>Redistribute content from ZapFlow</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8">Hyperlinking to our Content</h2>
          <p>The following organizations may link to our Website without prior written approval:</p>
          <ul className="list-disc list-inside">
            <li>Government agencies</li>
            <li>Search engines</li>
            <li>News organizations</li>
            <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses</li>
            <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
          </ul>
          <p>
            These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
          </p>

          <h2 className="text-2xl font-semibold mt-8">iFrames</h2>
          <p>
            Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Content Liability</h2>
          <p>
            We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Your Privacy</h2>
          <p>Please read Privacy Policy</p>

          <h2 className="text-2xl font-semibold mt-8">Reservation of Rights</h2>
          <p>
            We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amend these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Removal of links from our website</h2>
          <p>
            If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
          </p>
          <p>
            We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Disclaimer</h2>
          <p>
            To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc list-inside">
            <li>limit or exclude our or your liability for death or personal injury;</li>
            <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
            <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
            <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
          </ul>
          <p>
            The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
          </p>
          <p>
            As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
          </p>

          <h2 className="text-2xl font-semibold mt-8">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul className="list-disc list-inside">
            <li>By email: support@zapflow.com</li>
          </ul>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default TermsOfServicePage;
