# Security Policy

## Secret Handling

This portfolio is a static export and does not require production secrets.

Do not commit secrets to the repository. Keep these values in local or platform secret stores only:

- `GITHUB_TOKEN`
- `OPENAI_API_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- private keys such as `*.pem`
- database credentials
- OAuth client secrets

Never expose private tokens through `NEXT_PUBLIC_*`. Values with the `NEXT_PUBLIC_` prefix are bundled for browser use and can be read by any visitor.

If a future feature needs private GitHub, OpenAI, or Supabase access, implement it in a server-side route on a server runtime such as Vercel functions. GitHub Pages cannot safely host private-token features.

## Public Environment Variables

Only use `NEXT_PUBLIC_*` for values that are safe to publish, such as:

- public site URLs
- public analytics IDs with restricted origins
- public feature flags

## Reporting a Vulnerability

Please report security issues privately by email to `anudeepSri108@gmail.com` with:

- affected file or URL
- reproduction steps
- impact summary
- suggested fix, if known

Avoid opening public issues for suspected secrets, token exposure, or exploitable vulnerabilities.
