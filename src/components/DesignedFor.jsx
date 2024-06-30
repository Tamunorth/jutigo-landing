import React from "react";
import create from "../assets/create_icon.svg";
import getPaid from "../assets/get_paid_icon.svg";
import send from "../assets/send_icon.svg";
import CreateInvoiceSteps from "./InvoiceSteps/CreateInvoiceSteps";
import DesignedForItem from "./designed_for/DesignedForItem";

const DesignedFor = () => {
  return (
    <div className="flex flex-col justify-center items-center  py-24 text-center bg-[#FFFCEC]">
      <div className="pb-10">
        <p className="font-semibold text-2xl lg:text-4xl">
          Designed with you in mind
        </p>
        <p className="text-secondary text-lg xl:text-xl py-2 lg:py-7 mb-5">
          Jutigo is designed to meet the invoicing needs of a wide range of
          users
        </p>
      </div>

      <div className="  lg:flex justify-center w-full gap-5">
        <DesignedForItem
          title="Small Business Owners"
          subtitle="Customize invoices with your brand's logo and colors."
          image={
            "https://s3-alpha-sig.figma.com/img/c143/8d79/c668adb2de4551c7adbe00a704c8c9fc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkFrDcQsBW-asr3tkhY2gy68D657oMBJ5NXoMYBRPCpJOvM1N2wlF2MtIEfoNbHLAbaeESw5xWUqu37VWIFNSSfGgWYtOAawGaTvXV9uEVaReuMBi~tSkF05LXEZKbPXMuoAEAlZ~8SSs3yJJP78Ua3D2-VkF348N4S16NoWsao8bBqSl9G10xTkdJJj2zqzQ7C~tvd39A23UM5GmzEOlF0MCZPc8lebUnNVq~TAF~ugFDcLvuR1qjKmO8ecSklkHZA4pg9Br3T3lGJChe42WAyQhTOO9P~OJAGoa-iIkbwNak5QY9BzqtGRTn8LIxKWXWwgv9LmYaP8-deyFwUHFQ__"
          }
        />

        <DesignedForItem
          title="Freelancers"
          subtitle="Create and send professional invoices and get paid quickly."
          image={
            "https://s3-alpha-sig.figma.com/img/c143/8d79/c668adb2de4551c7adbe00a704c8c9fc?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jkFrDcQsBW-asr3tkhY2gy68D657oMBJ5NXoMYBRPCpJOvM1N2wlF2MtIEfoNbHLAbaeESw5xWUqu37VWIFNSSfGgWYtOAawGaTvXV9uEVaReuMBi~tSkF05LXEZKbPXMuoAEAlZ~8SSs3yJJP78Ua3D2-VkF348N4S16NoWsao8bBqSl9G10xTkdJJj2zqzQ7C~tvd39A23UM5GmzEOlF0MCZPc8lebUnNVq~TAF~ugFDcLvuR1qjKmO8ecSklkHZA4pg9Br3T3lGJChe42WAyQhTOO9P~OJAGoa-iIkbwNak5QY9BzqtGRTn8LIxKWXWwgv9LmYaP8-deyFwUHFQ__"
          }
        />
        <DesignedForItem
          title="Service Providers"
          subtitle="Customize your invoices to reflect the specific services provided."
          image={
            "https://s3-alpha-sig.figma.com/img/e717/2e71/79462e7bbd83112e4ffb71d763015b46?Expires=1720396800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MIjyA7~uIgUE8GrWYf5Z~Ue2F9NpmMMf8YVsxJxYK1YXl4RCbRWQ1xK0uomYKmcF8F2TSrW-mMv7IRM8MMig95BVy8MpeYbVEbGj5nk6SGpDI5zy6IQKgD0c7IqR7LNijCG33yZBazSNFS7F35v50VSr1BSDgQpUls7kqG7o3smbekt2HpMvvC5~pIchiCRaHibzOdUTBPM-O1mxj0gVLKMlkYyErQVkToxX5WofW2zdchNLcZzH3xVUrR5JguE6-NYEn7LuXvG~R00s~AtrEGSTJp6OfPJKpQh-V7vY9e8mFwZn6ungOh0eykN7R4Tf38gfpn13BuQ87P4yLXKz0Q__"
          }
        />
      </div>
    </div>
  );
};

export default DesignedFor;
