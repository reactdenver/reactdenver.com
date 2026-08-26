# Stablo Pro - Next.js & Sanity CMS Blog Template

Thank you for purchasing Stablo Pro. The advanced Pro version of Stablo Blog Template. Stablo is a JAMStack Blog Template built with Next.js, Tailwind CSS & Sanity CMS by [Web3Templates](https://web3templates.com/).

**[Click here to see live demo →](https://stablo-pro.web3templates.com/)**

#### Template Preview

[![Next.js Front-end Preview](https://user-images.githubusercontent.com/1884712/169838344-e32b7426-621a-45a4-aba8-afedf3377e1f.jpeg)](https://stablo-template.vercel.app/)

#### Sanity CMS Preview

[![Backend Sanity CMS Preview](https://user-images.githubusercontent.com/1884712/170030678-c6e32d47-0b92-42b7-ac2d-f3cf800c0969.png)](https://stablo-template.vercel.app/studio)

# Installation

Follow the installation guide to setup the stablo template.

## Step 1. Clone the Repo

Unzip the downloaded zip or clone the github repo to your local machine. Then open the project fodler in your favorite code editor. We prefer VSCode.

## Step 2. Setup `.env` Variables.

Open the project folder and rename `.env.local.example` placed in the root folder into `.env.local` and add your sanity project ID. You can create a new project by visiting this link: https://www.sanity.io/get-started/create-project

If you already have a project, copy the project ID from https://sanity.io/manage

```
NEXT_PUBLIC_SANITY_PROJECT_ID=xxyyzz
```

## Step 3. Allow CORS Origins

To make the studio work properly, you must add CORS origin in Sanity. Visit `https://www.sanity.io/manage/personal/project/<project-id>/api` in your browser to add CORS origin.

Click `Add CORS origin` button and enter the URL as `http://localhost:3000` and check the Allow credentials checkbox.

## Step 4: Import Demo Data (Optional)

To look like what you have seen in the demo, with all the content and images, follow the below steps:

1. if you have not installed `@sanity/cli` install it globally first.

```bash
npm install -g @sanity/cli
# or
pnpm install -g @sanity/cli
```

Then login to sanity using `sanity login` command

```
sanity login
```

Now, you will be able to import demo content by running the `sanity-import` command. The files are located at `/lib/sanity/data/production.tar.gz` and will load automatically by running the below command.

```bash
npm run sanity-import
# or
pnpm sanity-import
```

## Step 5: Finish it up!

Now, run your project using the below command.

```bash
npm run dev
# or
pnpm dev
```

Now your project should be up and the Next.js frontend will be running on http://localhost:3000.

Sanity Studio can be accessed using http://localhost:3000/studio or you can run it on a separate https://localhost:3333 server using the following command.

```bash
npm run sanity
# or
pnpm sanity
```

## Step 6. Deploy Changes

Once all of the above changes is made, make sure to redeploy to vercel once again to see all of your changes in production.

You can `git push` the changes and it should automatically trigger a new deployment. If not, you can also deploy to vercel using the following command.

```
npx vercel --prod
```

## Help and Support

If you need support or help, please contact us via https://web3templates.com/support.
