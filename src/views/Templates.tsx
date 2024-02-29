import { tagColors, templates } from "../assets/lists";

export default function Templates() {
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Templates</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {templates.map((template) => (
              <div key={template.tag} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg transition ease-in-out delay-75 border-2 border-orange-500 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:brightness-90 group-hover:border-orange-600 sm:h-64">
                  <img
                    src={template.imageSrc}
                    alt={template.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={template.href}>
                    <span className="absolute inset-0" />
                    <span
                      className={`inline-flex items-center rounded-md ${
                        tagColors[template.tag] || ""
                      } px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10`}>
                      {template.tag}
                    </span>
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">
                  {template.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
