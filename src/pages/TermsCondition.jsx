import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const TermsCondition = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isWhiteTheme = theme === "white";

  return (
    <div
      className={`h-screen w-full flex flex-col overflow-hidden font-sans ${
        isWhiteTheme ? "bg-white text-gray-800" : "bg-[#1e1e24] text-gray-300"
      }`}
    >
      {/* -------- HEADER / NAV BAR -------- */}
      <div
        className={`h-12 shrink-0 flex items-center px-6 border-b z-10 ${
          isWhiteTheme
            ? "bg-white border-gray-200"
            : "bg-[#2b2d31] border-zinc-700/50"
        }`}
      >
        <button
          onClick={() => navigate("/home")}
          className={`text-xs font-medium flex items-center gap-2 tracking-wide uppercase transition-colors ${
            isWhiteTheme
              ? "text-gray-500 hover:text-gray-900"
              : "text-gray-400 hover:text-white"
          }`}
        >
          ← Back to Home
        </button>
      </div>

      {/* -------- SCROLLABLE CONTENT -------- */}
      <div className="flex-1 overflow-y-auto px-6 py-12 md:py-16">
        <div className="max-w-2xl mx-auto space-y-10">
          
          {/* -------- TITLE & DATE -------- */}
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight mb-2">
              Terms of Service
            </h1>
            <p
              className={`text-xs ${
                isWhiteTheme ? "text-gray-400" : "text-zinc-500"
              }`}
            >
              Last updated: June 19, 2026
            </p>
            <div className="h-1 w-12 bg-blue-500 rounded mt-4"></div>
          </div>

          <p className="text-sm leading-relaxed font-medium">
            Please read these Terms of Service carefully before using the Mock
            API Manager ("the Service"). By accessing or using the Service, you
            legally agree to be bound by these provisions.
          </p>

          <hr
            className={
              isWhiteTheme ? "border-gray-100" : "border-zinc-800"
            }
          />

          {/* -------- SECTION 1: AGREEMENT -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                1. Agreement & Acceptance
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wider">
                TL;DR: Using this = agreeing
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              By accessing, deploying, or interacting with the Service, you
              create a legally binding agreement between yourself and the
              creators of this application. If you represent an entity, you
              warrant that you have authority to bind that entity. If you do not
              accept all clauses outlined here, you are strictly prohibited from
              using the platform.
            </p>
          </section>

          {/* -------- SECTION 2: SCOPE -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                2. Scope of Service & Non-Production Use
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 uppercase tracking-wider">
                TL;DR: Testing only, not for real apps
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              The Service functions solely as a sandbox workspace for
              application prototyping, mock testing endpoints, and educational
              workflows. All server payloads and routes are simulated. The
              architecture is explicitly{" "}
              <strong>
                not designed, hardened, or intended for critical production
                applications
              </strong>{" "}
              or high-availability backend environments.
            </p>
          </section>

          {/* -------- SECTION 3: DATA CONSTRAINTS -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                3. Data Constraints & Absolute Prohibitions
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-500/10 text-red-500 uppercase tracking-wider">
                TL;DR: ABSOLUTELY NO REAL SENSITIVE DATA
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              You are entirely liable for any payloads generated or stored via
              your API keys. You are subject to the following structural
              restrictions:
            </p>
            <ul className="list-disc pl-5 text-sm space-y-2 opacity-85">
              <li>
                <strong>No PII or Financial Data:</strong> You must not supply
                real passwords, actual credit/debit numbers, Social Security
                records, or Personally Identifiable Information (PII). Always
                employ randomized placeholder mocks.
              </li>
              <li>
                <strong>No Systems Abuse:</strong> You are barred from using
                automated load tools to scrape, DDOS, stress-test
                infrastructure, or deliberately attempt to exceed system
                constraints.
              </li>
            </ul>
          </section>

          {/* -------- SECTION 4: DISCLAIMER -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                4. Disclaimer of Warranties
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-500/20 text-zinc-400 uppercase tracking-wider">
                TL;DR: Zero promises things won't break
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed uppercase font-mono tracking-tight text-xs bg-zinc-500/5 p-3 rounded border border-zinc-500/10">
              The platform is delivered "AS IS" and "AS AVAILABLE" without
              warranties of any nature—whether express, implied, statutory, or
              otherwise. We disclaim any guarantees regarding server uptime,
              data persistence, completeness of logs, or that mock endpoints
              will accurately behave relative to production standards.
            </p>
          </section>

          {/* -------- SECTION 5: LIABILITY -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                5. Absolute Limitation of Liability
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-red-500/10 text-red-500 uppercase tracking-wider">
                TL;DR: If you lose data, you can't sue us
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              To the absolute maximum extent permitted under applicable law, the
              developers, maintainers, and operators shall never be held liable
              for any damages whatsoever. This includes direct financial loss,
              corruption of codebases, server interruptions, lost business
              opportunities, or security breaches resulting from your
              configurations or reliance on mock environments.
            </p>
          </section>

          {/* -------- SECTION 6: IP & TERMINATION -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                6. IP & Account Termination
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-zinc-500/20 text-zinc-400 uppercase tracking-wider">
                TL;DR: Bad actors get banned
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              We own all source proprietary interface architecture, styling
              assets, and structural tooling properties. We reserve the
              unrestricted right to terminate or freeze access controls, remove
              project histories, and invalidate keys instantly without warning
              if malicious intent or terms violations are discovered.
            </p>
          </section>

          {/* -------- SECTION 7: AUTHENTICATION PRIORITY (NEW) -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                7. Authentication Priority & Request Validation
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 uppercase tracking-wider">
                TL;DR: Bearer/API Key - Headers - Cookies
              </span>
            </div>
            <div className="space-y-3 text-sm opacity-85 leading-relaxed">
              <p>
                The mock engine enforces a strict waterfall validation priority
                to ensure deterministic behavior for all incoming API requests.
                This ensures that complex authentication scenarios are handled
                predictably without conflicts between different security layers.
              </p>
              <div
                className={`border-l-4 pl-4 py-2 text-xs font-mono tracking-tight ${
                  isWhiteTheme
                    ? "border-purple-400 bg-purple-50/50 text-gray-700"
                    : "border-purple-600 bg-purple-950/20 text-gray-300"
                }`}
              >
                <p>
                  <strong className="text-purple-500">🔐 Primary Gatekeeper:</strong>{" "}
                  If Bearer JWT or API Key authentication is enabled (
                  <code>isAuthEnabled: true</code>), it acts as the exclusive
                  primary login method. Valid credentials must be provided via
                  the dedicated <code>Authorization</code> header or{" "}
                  <code>X-API-Key</code> header.
                </p>
                <p className="mt-2">
                  <strong className="text-amber-500">⚠️ Conflict Resolution:</strong>{" "}
                  Any generic <code>Authorization</code> header defined inside
                  the custom headers array will be <strong>explicitly ignored</strong>{" "}
                  to prevent split-brain validation logic.
                </p>
                <p className="mt-2">
                  <strong className="text-blue-500">🔒 Secondary Layers:</strong>{" "}
                  Cookies and additional custom headers function as secondary
                  validation constraints. They must match their expected values
                  exactly, but they <strong>cannot</strong> substitute for a
                  missing or invalid primary credential.
                </p>
                <p className="mt-2">
                  <strong className="text-emerald-500">⬇️ Fallback Behavior:</strong>{" "}
                  If primary authentication is disabled (
                  <code>isAuthEnabled: false</code>), the system falls back
                  exclusively to validating the generic custom headers and
                  cookies defined for the endpoint.
                </p>
              </div>
              <p className="text-xs opacity-70">
                By coding this Waterfall logic, your mock API will behave
                predictably and handle complex multi-factor mocking scenarios
                without unexpected 401/403 errors.
              </p>
            </div>
          </section>

          {/* -------- SECTION 8: MODIFICATIONS & INQUIRIES (was Section 7) -------- */}
          <section className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-lg font-bold tracking-tight">
                8. Modifications & Inquiries
              </h2>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 uppercase tracking-wider">
                TL;DR: Check here for updates
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed">
              These terms are fluid and subject to revisions. Continued platform
              operations following any adjustments reflect binding acceptance.
              For legal dynamic verification or compliance inquiries, contact us
              directly at:
              <br />
              <a
                href="mailto:adityaboxi2005@gmail.com"
                className="text-blue-500 hover:underline hover:text-blue-400 font-medium"
              >
                adityaboxi2005@gmail.com
              </a>
              <br />
              <a
                href="mailto:krishnaboxi1983@gmail.com"
                className="text-blue-500 hover:underline hover:text-blue-400 font-medium"
              >
                krishnaboxi1983@gmail.com
              </a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default TermsCondition;