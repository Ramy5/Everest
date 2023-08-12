import FakeProductsTwoData from "@/components/Data/ProductTwo";
import FakeProductsOneData from "@/components/Data/ProductsOne";
import HomeCategories from "@/components/Home/HomeCategories/HomeCategories";
import HomeHeader from "@/components/Home/HomeHeader/HomeHeader";
import HomeOffers from "@/components/Home/HomeOffers/HomeOffers";
import HomeProducts from "@/components/Home/HomeProducts/HomeProducts";
import HomeSidebarAndSlide from "@/components/Home/HomeSidebar/HomeSidebarAndSlide";

export default function Home() {
  return (
    <div>
      {/* HEADER */}
      <HomeHeader />

      {/* HOME SIDEBAR AND SLIDE */}
      <HomeSidebarAndSlide />

      {/* HOME CATEGORIES */}
      <HomeCategories />

      {/* HOME OFFERS */}
      <HomeOffers />

      {/* OUR PRODUCTS */}
      <div className="overflow-y-scroll scrollbar-none h-96">
        {/* PRODUCTS ONE */}
        <HomeProducts
          data={FakeProductsOneData}
          sectionTitle={"Food Products Section"}
        />
        {/* PRODUCTS  TWO */}
        <HomeProducts
          data={FakeProductsTwoData}
          sectionTitle={"Laptop Products Section"}
        />
      </div>
    </div>
  );
}
