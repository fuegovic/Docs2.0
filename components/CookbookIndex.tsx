import { getPagesUnderRoute } from "nextra/context";
import { type Page } from "nextra";
import { Cards } from "nextra/components";
import { FileCode } from "lucide-react";

export const CookbookIndex = () => (
  <>
    {Object.entries(
      (
        getPagesUnderRoute("/guides/cookbook") as Array<
          Page & { frontMatter: any }
        >
      )
        .filter((page) => page.route !== "/cookbook")
        .reduce((acc, page) => {
          const category = page.frontMatter?.category || "Other";
          if (!acc[category]) acc[category] = [];
          acc[category].push(page);
          return acc;
        }, {} as Record<string, Array<Page & { frontMatter: any }>>)
    )
      .sort(([categoryA], [categoryB]) => {
        if (categoryA === "Other") return 1;
        if (categoryB === "Other") return -1;
        return categoryA.localeCompare(categoryB);
      })
      .map(([category, pages]) => (
        <div key={category}>
          <h3 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-mt-8 nx-text-2xl">
            {category}
          </h3>

        </div>
      ))}
  </>
);
