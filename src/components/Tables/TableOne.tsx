import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    name: "Supplier A",
    price: "0.12",
    contractLength: "24 months",
    earlyTerminationFee: "$150",
    renewableOptions: "50% renewable",
    specialProvisions: "Fixed rate",
    customerReviews: "4.5/5",
    additionalFees: "$5/month",
    paymentOptions: "Credit Card, Bank Draft",
  },
  {
    name: "Supplier B",
    price: "0.10",
    contractLength: "12 months",
    earlyTerminationFee: "$100",
    renewableOptions: "100% renewable",
    specialProvisions: "Variable rate",
    customerReviews: "4.0/5",
    additionalFees: "$10/month",
    paymentOptions: "Credit Card, Bank Draft",
  },
  {
    name: "Supplier C",
    price: "0.11",
    contractLength: "36 months",
    earlyTerminationFee: "$200",
    renewableOptions: "75% renewable",
    specialProvisions: "Time-of-use rates",
    customerReviews: "4.2/5",
    additionalFees: "$3/month",
    paymentOptions: "All major methods",
  },
  // Adding new mock suppliers
  {
    name: "Supplier D",
    price: "0.09",
    contractLength: "18 months",
    earlyTerminationFee: "$120",
    renewableOptions: "80% renewable",
    specialProvisions: "Time-of-use rates",
    customerReviews: "3.8/5",
    additionalFees: "$8/month",
    paymentOptions: "Direct Debit, PayPal",
  },
  {
    name: "Supplier E",
    price: "0.13",
    contractLength: "24 months",
    earlyTerminationFee: "$180",
    renewableOptions: "40% renewable",
    specialProvisions: "Fixed rate",
    customerReviews: "4.7/5",
    additionalFees: "$2/month",
    paymentOptions: "Credit Card, Cheque",
  },
  {
    name: "Supplier F",
    price: "0.14",
    contractLength: "30 months",
    earlyTerminationFee: "$250",
    renewableOptions: "60% renewable",
    specialProvisions: "Peak and Off-Peak rates",
    customerReviews: "4.9/5",
    additionalFees: "$0/month",
    paymentOptions: "Credit Card, Bank Draft, Bitcoin",
  }
];


const TableOne = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pb-2.5 pt-6 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Energy Supplier Comparison
      </h4>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">Supplier</th>
              <th scope="col" className="px-6 py-3">Price ($/kWh)</th>
              <th scope="col" className="px-6 py-3">Contract Length</th>
              <th scope="col" className="px-6 py-3">Early Termination Fee</th>
              <th scope="col" className="px-6 py-3">Renewable Options</th>
              <th scope="col" className="px-6 py-3">Special Provisions</th>
              <th scope="col" className="px-6 py-3">Customer Reviews</th>
              <th scope="col" className="px-6 py-3">Additional Fees</th>
              <th scope="col" className="px-6 py-3">Payment Options</th>
            </tr>
          </thead>
          <tbody>
            {brandData.map((supplier, index) => (
              <tr key={index} className="bg-white dark:bg-gray-800">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                  {supplier.name}
                </th>
                <td className="px-6 py-4">${supplier.price}</td>
                <td className="px-6 py-4">{supplier.contractLength}</td>
                <td className="px-6 py-4">{supplier.earlyTerminationFee}</td>
                <td className="px-6 py-4">{supplier.renewableOptions}</td>
                <td className="px-6 py-4">{supplier.specialProvisions}</td>
                <td className="px-6 py-4">{supplier.customerReviews}</td>
                <td className="px-6 py-4">{supplier.additionalFees}</td>
                <td className="px-6 py-4">{supplier.paymentOptions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableOne;
