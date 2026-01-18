import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "@/components/layout/Footer";
import {
  Sheet,
  SheetContent
} from "@/components/ui/sheet";

type JobRole =
  | "all"
  | "software"
  | "designer"
  | "data"
  | "product"
  | "executive";

type Category =
  | "All"
  | "Professional"
  | "Creative"
  | "Executive"
  | "Minimalist"
  | "Bold";

const Templates = () => {
  const [selectedRole, setSelectedRole] = useState<JobRole>("all");
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const templates = [
    {
      id: 1,
      name: "Modern Professional",
      description: "Clean and modern design perfect for tech professionals",
      image: "/Resume1.webp",
      category: "Professional",
      roles: ["software", "data", "product"],
      type: "modern",
    },
    {
      id: 2,
      name: "Creative Designer",
      description: "Eye-catching design for creative professionals",
      image: "Resume2.jpg",
      category: "Creative",
      roles: ["designer"],
      type: "creative",
    },
    {
      id: 3,
      name: "Executive Standard",
      description: "Sophisticated template for senior executives",
      image: "/Resume3.jpg",
      category: "Executive",
      roles: ["executive", "product"],
      type: "professional",
    },
    {
      id: 4,
      name: "Minimalist Clean",
      description: "Simple and elegant design focusing on content clarity",
      image: "/Resume1.webp",
      category: "Minimalist",
      roles: ["software", "data"],
      type: "minimalist",
    },
    {
      id: 5,
      name: "Bold Impact",
      description: "Strong, bold design that grabs recruiter attention",
      image: "/Resume2.jpg",
      category: "Bold",
      roles: ["designer", "product"],
      type: "bold",
    },
    {
      id: 6,
      name: "Tech Minimal Pro",
      description: "ATS-optimized minimal layout trusted by tech recruiters",
      image: "/Resume3.jpg",
      category: "Professional",
      roles: ["software", "data"],
      type: "modern",
    },
    {
      id: 7,
      name: "Startup Impact",
      description: "Modern startup-style resume with strong visual hierarchy",
      image: "/Resume4.jpg",
      category: "Bold",
      roles: ["product", "software"],
      type: "bold",
    },
    {
      id: 8,
      name: "Elegant Executive",
      description: "High-end executive resume with clean typography",
      image: "/Resume5.jpg",
      category: "Executive",
      roles: ["executive"],
      type: "professional",
    },
    {
      id: 9,
      name: "UX Portfolio Resume",
      description: "Creative layout designed for UI/UX and visual designers",
      image: "/Resume4.jpg",
      category: "Creative",
      roles: ["designer"],
      type: "creative",
    },
    {
      id: 10,
      name: "Data Focused",
      description: "Designed for data analysts with skills & metrics emphasis",
      image: "/Resume5.jpg",
      category: "Professional",
      roles: ["data"],
      type: "modern",
    },
    {
      id: 11,
      name: "FAANG Classic",
      description: "Simple, recruiter-approved format for top tech companies",
      image: "/Resume6.jpg",
      category: "Minimalist",
      roles: ["software", "data"],
      type: "minimalist",
    },
    {
      id: 12,
      name: "Creative Bold Grid",
      description: "Bold grid-based layout for modern creative professionals",
      image: "/Resume1.webp",
      category: "Bold",
      roles: ["designer", "product"],
      type: "bold",
    },
    {
      id: 13,
      name: "Consulting Elite",
      description: "Structured layout ideal for consulting & strategy roles",
      image: "/Resume3.jpg",
      category: "Professional",
      roles: ["product", "executive"],
      type: "professional",
    },
  ];

  const filteredTemplates = templates.filter((template) => {
    const roleMatch =
      selectedRole === "all" || template.roles.includes(selectedRole);
    const categoryMatch =
      selectedCategory === "All" || template.category === selectedCategory;
    return roleMatch && categoryMatch;
  });

  // Mobile filter button component
  const MobileFilterButton = () => (
    <Button
      variant="outline"
      className="md:hidden"
      onClick={() => setIsMobileFiltersOpen(true)}
    >
      <Menu className="w-4 h-4 mr-2" />
      Filters
    </Button>
  );

  // Mobile filters sheet
  const MobileFiltersSheet = () => (
    <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
      <SheetContent side="right" className="w-[85vw] sm:w-[400px]">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Filters</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMobileFiltersOpen(false)}
            className="md:hidden" // Add this to hide on desktop if needed
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Job Role Filter */}
        <div className="mb-8">
          <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
            Job Role
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              ["all", "All Roles"],
              ["software", "Software"],
              ["designer", "Designer"],
              ["data", "Data"],
              ["product", "Product"],
              ["executive", "Executive"],
            ].map(([value, label]) => (
              <Button
                key={value}
                size="sm"
                variant={selectedRole === value ? "default" : "outline"}
                onClick={() => {
                  setSelectedRole(value as JobRole);
                  setIsMobileFiltersOpen(false);
                }}
                className="text-xs px-3"
              >
                {label}
              </Button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div>
          <h3 className="font-semibold mb-3 text-gray-700 dark:text-gray-300">
            Category
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "All",
              "Professional",
              "Creative",
              "Executive",
              "Minimalist",
              "Bold",
            ].map((cat) => (
              <Button
                key={cat}
                size="sm"
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => {
                  setSelectedCategory(cat as Category);
                  setIsMobileFiltersOpen(false);
                }}
                className="text-xs px-3"
              >
                {cat}
              </Button>
            ))}
          </div>
        </div>

        {/* Active filters display */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Active filters:
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedRole("all");
                setSelectedCategory("All");
              }}
              className="text-xs"
            >
              Clear all
            </Button>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {selectedRole !== "all" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
              </span>
            )}
            {selectedCategory !== "All" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                {selectedCategory}
              </span>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* Navigation */}
      <nav className="border-b bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="./websitelogo.png"
              alt="logo"
              className="w-7 h-7 md:w-8 md:h-8"
            />
            <span className="text-xl md:text-2xl font-bold">urCV.ai</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <Link to="/">
              <Button
                variant="ghost"
                size="sm"
                className="hidden md:flex md:gap-1"
              >
                <ArrowLeft className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                <span className="hidden md:inline">Back</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden p-2"
              >
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <ThemeToggle />
            <MobileFilterButton />
            <Link to="/builder">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base"
                size="sm"
              >
                <span className="hidden sm:inline">Create Resume</span>
                <span className="sm:hidden">Create</span>
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-gray-50 dark:bg-gray-900 py-8 md:py-16 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
            Choose Your Perfect{" "}
            <span className="text-blue-600">Resume Template</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6 md:mb-8">
            Filter templates by job role and category to find the best match for
            your career.
          </p>

          {/* Active Filters Display (Mobile) */}
          <div className="md:hidden flex flex-wrap justify-center gap-2 mb-4">
            {selectedRole !== "all" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-blue-100 text-blue-700">
                {selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}
              </span>
            )}
            {selectedCategory !== "All" && (
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs bg-green-100 text-green-700">
                {selectedCategory}
              </span>
            )}
          </div>

          {/* Desktop Filters */}
          <div className="hidden md:block">
            {/* Job Role Filter */}
            <div className="mt-6 md:mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                ["all", "All Roles"],
                ["software", "Software"],
                ["designer", "Designer"],
                ["data", "Data"],
                ["product", "Product"],
                ["executive", "Executive"],
              ].map(([value, label]) => (
                <Button
                  key={value}
                  variant={selectedRole === value ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedRole(value as JobRole)}
                  className="text-sm px-4"
                >
                  {label}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="mt-3 md:mt-4 flex flex-wrap justify-center gap-2 md:gap-3">
              {[
                "All",
                "Professional",
                "Creative",
                "Executive",
                "Minimalist",
                "Bold",
              ].map((cat) => (
                <Button
                  key={cat}
                  size="sm"
                  variant={selectedCategory === cat ? "default" : "ghost"}
                  onClick={() => setSelectedCategory(cat as Category)}
                  className="text-xs md:text-sm px-3 md:px-4"
                >
                  {cat}
                </Button>
              ))}
            </div>
          </div>

          {/* Mobile Filters Info */}
          <div className="md:hidden mt-4">
            <p className="text-xs text-gray-500">
              Tap "Filters" button to customize your search
            </p>
          </div>
        </div>
      </section>

      {/* Templates Grid */}
      <section className="container mx-auto px-3 sm:px-4 py-4 md:py-8">
        <div className="flex items-center justify-between mb-3 md:mb-6">
          <h2 className="text-base md:text-xl font-semibold">
            Templates ({filteredTemplates.length})
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => {
              setSelectedRole("all");
              setSelectedCategory("All");
            }}
            className="text-xs md:text-sm h-8"
          >
            Clear filters
          </Button>
        </div>

        {filteredTemplates.length === 0 ? (
          <div className="text-center py-8 md:py-16">
            <div className="text-gray-400 mb-3">
              <svg
                className="w-12 h-12 md:w-16 md:h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-base md:text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
              No templates found
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Try changing your filters or clear them to see all templates.
            </p>
            <Button
              size="sm"
              onClick={() => {
                setSelectedRole("all");
                setSelectedCategory("All");
              }}
            >
              Clear all filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-6 lg:gap-8">
            {filteredTemplates.map((template) => (
              <Card
                key={template.id}
                className="overflow-hidden hover:shadow-lg transition-all group border border-gray-200 dark:border-gray-800"
              >
                <div className="aspect-[1/1.2] sm:aspect-[1/1.414] overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4">
                  <div className="flex justify-between items-start mb-1 sm:mb-2">
                    <h3 className="font-bold text-sm sm:text-base md:text-lg line-clamp-1">
                      {template.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 ml-1 sm:ml-2 shrink-0">
                      {template.category}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs md:text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-3 md:mb-4 line-clamp-2">
                    {template.description}
                  </p>
                  <Link to="/builder" className="block">
                    <Button className="w-full bg-slate-900 text-white hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-700 text-xs sm:text-sm md:text-base py-1.5 sm:py-2">
                      Use This Template
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        )}
      </section>

      {/* Mobile Filters Sheet */}
      <MobileFiltersSheet />

      <Footer />
    </div>
  );
};

export default Templates;