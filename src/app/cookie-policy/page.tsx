import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { SITE } from "@/data/site";

const TITLE = `Cookie Policy — ${SITE.name}`;
const DESCRIPTION =
  "Which cookies Invoice Creator uses, why we use them, and how to control or disable them in your browser.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: "Cookies used by Invoice Creator and how to control them.",
    type: "website",
    url: "/cookie-policy",
  },
  alternates: { canonical: "/cookie-policy" },
};

export default function Page() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="24 September 2026"
      lead="Cookies are small files stored by your browser. Here is every category we use and how to switch them off."
    >
      <h2>1. Who we are</h2>
      <p>
        {SITE.name} is operated by {SITE.operator}, based in {SITE.address}. This Cookie Policy
        explains how cookies and similar technologies are used on this website.
      </p>

      <h2>2. What cookies are</h2>
      <p>
        Cookies and similar technologies (local storage, pixels) let a website remember information
        between visits. Some are essential; others are optional.
      </p>

      <h2>3. Categories we use</h2>
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>Purpose</th>
            <th>Optional?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Strictly necessary</td>
            <td>Security, load balancing and core site functionality.</td>
            <td>No</td>
          </tr>
          <tr>
            <td>Preferences (local storage)</td>
            <td>Remembers your light/dark theme and your saved invoice draft.</td>
            <td>No — stored only on your device</td>
          </tr>
          <tr>
            <td>Analytics</td>
            <td>Aggregated page views and traffic sources so we can improve the site.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Advertising</td>
            <td>
              Used by partners such as Google AdSense to serve and measure relevant advertising.
            </td>
            <td>Yes</td>
          </tr>
        </tbody>
      </table>

      <h2>4. Third-party advertising cookies</h2>
      <p>
        Third-party vendors, including Google, may use cookies to serve ads based on your prior
        visits to this and other websites. You can opt out of personalised advertising through
        Google&apos;s Ads Settings, and you can opt out of many other vendors at{" "}
        <a href="https://www.aboutads.info/choices/" rel="nofollow noopener" target="_blank">
          aboutads.info/choices
        </a>
        .
      </p>

      <h2>5. Managing cookies in your browser</h2>
      <p>
        Every major browser lets you block or delete cookies from its settings menu, usually under
        &quot;Privacy&quot;. Blocking all cookies may break parts of the site, including your saved
        invoice draft.
      </p>

      <h2>6. Do Not Track</h2>
      <p>
        We honour browser Do Not Track signals for our own analytics where technically supported.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions? Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. See also our{" "}
        <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
