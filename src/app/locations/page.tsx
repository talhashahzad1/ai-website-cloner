import type { Metadata } from "next";
import { SiteLayout } from "@/components/sites/rea-co/shared/SiteLayout";
import { SubPageHero } from "@/components/sites/rea-co/shared/SubPageHero";
import { FinalCta } from "@/components/sites/rea-co/shared/FinalCta";

export const metadata: Metadata = {
  title: "Locations | REA",
  description: "REA serves real estate companies across all 50 states. Remote-first team with deep expertise in state-specific trust accounting requirements.",
};

const states = [
  { name: "Alabama", cities: ["Birmingham", "Montgomery", "Huntsville"] },
  { name: "Alaska", cities: ["Anchorage", "Fairbanks", "Juneau"] },
  { name: "Arizona", cities: ["Phoenix", "Tucson", "Scottsdale"] },
  { name: "California", cities: ["Los Angeles", "San Diego", "San Francisco"] },
  { name: "Colorado", cities: ["Denver", "Colorado Springs", "Boulder"] },
  { name: "Connecticut", cities: ["Hartford", "New Haven", "Stamford"] },
  { name: "Florida", cities: ["Miami", "Orlando", "Tampa"] },
  { name: "Georgia", cities: ["Atlanta", "Savannah", "Augusta"] },
  { name: "Hawaii", cities: ["Honolulu", "Hilo", "Kailua"] },
  { name: "Idaho", cities: ["Boise", "Nampa", "Meridian"] },
  { name: "Illinois", cities: ["Chicago", "Springfield", "Naperville"] },
  { name: "Indiana", cities: ["Indianapolis", "Fort Wayne", "Evansville"] },
  { name: "Iowa", cities: ["Des Moines", "Cedar Rapids", "Davenport"] },
  { name: "Kansas", cities: ["Wichita", "Overland Park", "Kansas City"] },
  { name: "Kentucky", cities: ["Louisville", "Lexington", "Bowling Green"] },
  { name: "Louisiana", cities: ["New Orleans", "Baton Rouge", "Shreveport"] },
  { name: "Maine", cities: ["Portland", "Lewiston", "Bangor"] },
  { name: "Maryland", cities: ["Baltimore", "Rockville", "Gaithersburg"] },
  { name: "Massachusetts", cities: ["Boston", "Cambridge", "Worcester"] },
  { name: "Michigan", cities: ["Detroit", "Grand Rapids", "Ann Arbor"] },
  { name: "Minnesota", cities: ["Minneapolis", "St. Paul", "Rochester"] },
  { name: "Mississippi", cities: ["Jackson", "Gulfport", "Southaven"] },
  { name: "Missouri", cities: ["Kansas City", "St. Louis", "Springfield"] },
  { name: "Montana", cities: ["Billings", "Missoula", "Great Falls"] },
  { name: "Nebraska", cities: ["Omaha", "Lincoln", "Bellevue"] },
  { name: "Nevada", cities: ["Las Vegas", "Reno", "Henderson"] },
  { name: "New Hampshire", cities: ["Manchester", "Nashua", "Concord"] },
  { name: "New Jersey", cities: ["Newark", "Jersey City", "Paterson"] },
  { name: "New Mexico", cities: ["Albuquerque", "Santa Fe", "Las Cruces"] },
  { name: "New York", cities: ["New York City", "Buffalo", "Rochester"] },
  { name: "North Carolina", cities: ["Charlotte", "Raleigh", "Durham"] },
  { name: "North Dakota", cities: ["Fargo", "Bismarck", "Grand Forks"] },
  { name: "Ohio", cities: ["Columbus", "Cleveland", "Cincinnati"] },
  { name: "Oklahoma", cities: ["Oklahoma City", "Tulsa", "Norman"] },
  { name: "Oregon", cities: ["Portland", "Eugene", "Salem"] },
  { name: "Pennsylvania", cities: ["Philadelphia", "Pittsburgh", "Allentown"] },
  { name: "Rhode Island", cities: ["Providence", "Warwick", "Cranston"] },
  { name: "South Carolina", cities: ["Charleston", "Columbia", "Greenville"] },
  { name: "South Dakota", cities: ["Sioux Falls", "Rapid City", "Aberdeen"] },
  { name: "Tennessee", cities: ["Nashville", "Memphis", "Knoxville"] },
  { name: "Texas", cities: ["Houston", "Dallas", "Austin"] },
  { name: "Utah", cities: ["Salt Lake City", "Provo", "West Jordan"] },
  { name: "Vermont", cities: ["Burlington", "Rutland", "Montpelier"] },
  { name: "Virginia", cities: ["Richmond", "Virginia Beach", "Norfolk"] },
  { name: "Washington", cities: ["Seattle", "Spokane", "Tacoma"] },
  { name: "West Virginia", cities: ["Charleston", "Huntington", "Morgantown"] },
  { name: "Wisconsin", cities: ["Milwaukee", "Madison", "Green Bay"] },
  { name: "Wyoming", cities: ["Cheyenne", "Casper", "Laramie"] },
];

export default function LocationsPage() {
  return (
    <SiteLayout>
      <SubPageHero
        title="Locations We Serve"
        description="REA serves real estate companies across all 50 states. Trust accounting rules vary by state — we know them all."
        showDotGrid
      />

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-center text-[clamp(1.5rem,3vw,2rem)] font-semibold text-[#07213a]">
            All 50 States
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#435e6b]">
            Trust accounting rules vary by state. REA works in all 50 states and publishes state-specific details for 152 markets.
          </p>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {states.map((state) => (
              <div key={state.name} className="rounded-xl border border-[#dbe0e7] bg-white p-4">
                <h3 className="font-heading text-sm font-semibold text-[#07213a]">{state.name}</h3>
                <p className="mt-1 text-xs text-[#435e6b]">{state.cities.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta heading="Serving Clients Across the US" description="Whether you're in New York or California, REA has the expertise to handle your state-specific trust accounting requirements." />
    </SiteLayout>
  );
}
