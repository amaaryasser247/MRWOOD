export const projects = [
  {
    id: 1,
    slug: "modern-villa-residence",
    name: "Modern Villa Residence",
    title: "Modern Villa Residence",
    location: "Dubai Hills",
    year: "2024",
    summary: "A complete interior woodworking project featuring flush modern doors, custom wall paneling, and an oversized entrance door in natural walnut finish.",
    description: "A complete interior woodworking project featuring flush modern doors, custom wall paneling, and an oversized entrance door in natural walnut finish.",
    scope: "Interior doors · Wall paneling · Custom wardrobe",
    cover: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      { category: "Entrance", url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1000&auto=format&fit=crop" },
      { category: "Living Room", url: "https://images.unsplash.com/photo-1600607687931-cebf14cd5749?q=80&w=1000&auto=format&fit=crop" },
      { category: "Door Details", url: "https://images.unsplash.com/photo-1509644851169-2acc08aa25b5?q=80&w=1000&auto=format&fit=crop" }
    ]
  },
  {
    id: 2,
    slug: "luxury-apartment",
    name: "Luxury Apartment",
    title: "Luxury Apartment",
    location: "Downtown",
    year: "2024",
    summary: "Elegant interior doors and custom wardrobe solutions. Using dark charcoal finishes to contrast with the warm ivory walls of the apartment.",
    description: "Elegant interior doors and custom wardrobe solutions. Using dark charcoal finishes to contrast with the warm ivory walls of the apartment.",
    scope: "Interior doors · Custom wardrobes · Hallway paneling",
    cover: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      { category: "Bedroom", url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1000&auto=format&fit=crop" },
      { category: "Hallway", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop" }
    ]
  },
  {
    id: 3,
    slug: "classic-estate",
    name: "Classic Estate",
    title: "Classic Estate",
    location: "Palm Jumeirah",
    year: "2023",
    summary: "Traditional craftsmanship meets luxury. Intricately carved classic doors and solid wood frames designed specifically for this majestic estate.",
    description: "Traditional craftsmanship meets luxury. Intricately carved classic doors and solid wood frames designed specifically for this majestic estate.",
    scope: "Entrance doors · Classic carved panels · Bespoke frames",
    cover: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      { category: "Entrance", url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000&auto=format&fit=crop" },
      { category: "Living Room", url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop" }
    ]
  }
];

export function getProject(slug) {
  return projects.find(p => p.slug === slug) || null;
}

