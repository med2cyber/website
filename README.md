# Med2Cyber Solutions website

A responsive static website designed for GitHub Pages.

## Publish to GitHub Pages

1. Create a new public GitHub repository, such as `med2cyber-website`.
2. Upload all files in this folder to the repository root.
3. Open **Settings → Pages** in the repository.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)`, then save.
6. In **Custom domain**, enter `med2cyber.com`.
7. After DNS validation completes, enable **Enforce HTTPS**.

## Porkbun DNS for GitHub Pages

Only change the website records. Keep all Microsoft 365 MX, SPF, DKIM, and Autodiscover records.

For the root domain, add these four A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

For `www`, add a CNAME pointing to your GitHub username domain:

- `YOUR-GITHUB-USERNAME.github.io`

Replace `YOUR-GITHUB-USERNAME` with your actual GitHub username.

## Contact form

The current form opens the visitor's default email program and addresses the message to `info@med2cyber.com`. For direct form submission without an email application, connect Formspree, Web3Forms, or another form endpoint.

## Content notes

Before publishing, review the client wording and technical capabilities to ensure every statement precisely reflects Med2Cyber's services and contractual relationships.
