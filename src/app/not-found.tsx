import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-20">
      <div className="max-w-lg text-center">
        <p className="font-display text-8xl font-extrabold text-gradient">404</p>
        <h1 className="mt-4 text-2xl font-bold text-foreground">This page doesn&apos;t exist</h1>
        <p className="mt-3 text-muted-foreground">
          The page you&apos;re looking for has moved or never existed. Try the invoice generator,
          browse our templates, or search the blog.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Link
            href="/invoice-generator"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Create an invoice
          </Link>
          <Link
            href="/invoice-templates"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-input px-5 text-sm font-semibold transition-colors hover:bg-accent/20"
          >
            Browse templates
          </Link>
          <Link
            href="/search"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-input px-5 text-sm font-semibold transition-colors hover:bg-accent/20"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
}
