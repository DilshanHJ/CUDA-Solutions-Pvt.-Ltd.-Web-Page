import { useEffect } from "react";

function ProductSeo({ title, description, path, schema }) {
  useEffect(() => {
    const previousTitle = document.title;
    const descriptionMeta = document.querySelector('meta[name="description"]');
    const previousDescription = descriptionMeta?.getAttribute("content") || "";
    let meta = descriptionMeta;
    let createdMeta = false;

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
      createdMeta = true;
    }

    const previousCanonical = document.querySelector('link[rel="canonical"]');
    const previousCanonicalHref = previousCanonical?.getAttribute("href") || "";
    let canonical = previousCanonical;
    let createdCanonical = false;

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
      createdCanonical = true;
    }

    document.title = title;
    meta.setAttribute("content", description);
    canonical.setAttribute("href", `${window.location.origin}${path}`);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });

    const schemaNode = document.createElement("script");
    schemaNode.type = "application/ld+json";
    schemaNode.dataset.productSchema = path;
    schemaNode.textContent = JSON.stringify(schema);
    document.head.appendChild(schemaNode);

    return () => {
      document.title = previousTitle;

      if (createdMeta) {
        meta.remove();
      } else {
        meta.setAttribute("content", previousDescription);
      }

      if (createdCanonical) {
        canonical.remove();
      } else {
        canonical.setAttribute("href", previousCanonicalHref);
      }

      schemaNode.remove();
    };
  }, [title, description, path, schema]);

  return null;
}

export default ProductSeo;
