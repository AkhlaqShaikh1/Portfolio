import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - Coms Advance Engineering",
  description: "Privacy Policy for Coms Advance Engineering apps and services",
};

export default function PrivacyPolicy() {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center items-start mx-auto sm:px-10 px-5 py-20">
      <div className="max-w-4xl w-full">
        <Link
          href="/"
          className="inline-flex items-center text-purple hover:underline mb-8 text-sm"
        >
          &larr; Back to Home
        </Link>

        <h1 className="text-4xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="text-white-200 mb-10 text-sm">
          Last updated: June 9, 2026
        </p>

        <div className="space-y-8 text-white-200 leading-relaxed">
          <Section title="Introduction">
            <p>
              Coms Advance Engineering (&quot;we&quot;, &quot;our&quot;, or
              &quot;us&quot;) is committed to protecting your privacy. This
              Privacy Policy explains how we collect, use, and safeguard your
              information when you use our mobile applications available on
              Google Play Store and Apple App Store, and our website.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p className="font-semibold text-white mb-2">
              Information you provide directly:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Name, email address, and message content when you use our contact form</li>
              <li>Any information you voluntarily submit through our apps or website</li>
            </ul>

            <p className="font-semibold text-white mb-2 mt-4">
              Information collected automatically:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Device information (device type, operating system, unique device identifiers)</li>
              <li>Usage data (app interactions, features used, session duration)</li>
              <li>Log data (IP address, browser type, access times)</li>
              <li>Analytics data through third-party services (e.g., Google Analytics)</li>
            </ul>
          </Section>

          <Section title="How We Use Your Information">
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>To provide, maintain, and improve our apps and services</li>
              <li>To respond to your inquiries and support requests</li>
              <li>To send important notices and updates about our services</li>
              <li>To monitor and analyze usage trends to improve user experience</li>
              <li>To detect, prevent, and address technical issues or security threats</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>
              Our apps and website may use third-party services that collect
              information. These include:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Google Analytics &mdash; for usage analytics</li>
              <li>Google AdSense &mdash; for serving advertisements</li>
              <li>Cloudflare Turnstile &mdash; for spam protection on forms</li>
            </ul>
            <p className="mt-2">
              These third-party services have their own privacy policies
              governing how they use your information.
            </p>
          </Section>

          <Section title="Data Storage and Security">
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information. However, no method
              of transmission over the internet or electronic storage is 100%
              secure, and we cannot guarantee absolute security.
            </p>
          </Section>

          <Section title="Data Retention">
            <p>
              We retain your personal information only for as long as necessary
              to fulfill the purposes outlined in this policy, unless a longer
              retention period is required or permitted by law.
            </p>
          </Section>

          <Section title="Your Rights">
            <p>You have the right to:</p>
            <ul className="list-disc list-inside space-y-1 ml-2 mt-2">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
          </Section>

          <Section title="Children&rsquo;s Privacy">
            <p>
              Our services are not directed to children under the age of 13. We
              do not knowingly collect personal information from children under
              13. If we become aware that we have collected personal data from a
              child under 13, we will take steps to delete that information
              promptly.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. We will
              notify you of any changes by posting the new policy on this page
              and updating the &quot;Last updated&quot; date. We encourage you
              to review this policy periodically.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <p className="mt-2">
              <strong className="text-white">Coms Advance Engineering</strong>
              <br />
              Email:{" "}
              <a
                href="mailto:ent.whatsapp@gmail.com"
                className="text-purple hover:underline"
              >
                ent.whatsapp@gmail.com
              </a>
            </p>
          </Section>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 text-center text-white-200 text-sm">
          Copyright Coms Advance Engineering, 2026. All rights reserved.
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
      {children}
    </section>
  );
}
