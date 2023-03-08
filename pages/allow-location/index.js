import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Allow Location Access</title>
      </Head>
      <div>
        <div
          className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <span className="font-medium">Allow Location Access</span> Please
          Allow location access to works
        </div>
        <div
          className="p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-800 dark:text-yellow-300"
          role="alert"
        >
          <span className="font-medium">দয়া করে লোকেশন এক্সেস প্রদান করুন</span>{" "}
          আপনার লোকেশন এর উপর ভিত্তি করে এই এপস ডেটা প্রদান করে তাই লোকেশন
          এক্সেস করার অনুমতি দিতে হবে, নাহলে পরিপূর্ণ ইনফরমেশন পাওয়া যাবে না।
        </div>
      </div>
    </>
  );
};

export default index;
