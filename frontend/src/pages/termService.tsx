// src/pages/termsService.tsx

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsService: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-24">
      {/* Back Button */}
      <button
        onClick={() => navigate("/")}
        className="mb-6 px-4 py-2 text-white bg-gradient-sunset hover:bg-gradient-sunset transition rounded-md"
      >
        ← Back to Home
      </button>

      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
        <h1 className="text-4xl font-extrabold bg-gradient-sunset bg-clip-text text-transparent mb-6 text-center">
          Terms & Conditions
        </h1>

        {/* Content */}
        <section className="space-y-6 text-gray-700 leading-relaxed">
       

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            Rates, Inventory & Services
          </h2>
          <p>
            All rates quoted by Global Journey are net and can be provided in GBP,
            EUR or CHF. Rates are based on current exchange rates; should
            significant currency fluctuations occur; we reserve the right to
            adjust prices. Land itineraries, conditions and prices are confirmed
            through a separate signed quotation and are valid as per the terms
            therein. All quoted rates are net, non-commissionable and inclusive of
            government taxes and VAT (unless otherwise specified). Should there be
            any changes to government taxes or VAT, surcharges may be applied and
            clients will be informed accordingly.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            Booking Procedure
          </h2>
          <p>
            All bookings and confirmations must be submitted in writing by email.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            Payment Terms (Unless Otherwise Agreed)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>A 20% deposit is required within 10 days of booking confirmation.</li>
            <li>This deposit is refundable if the group cancels more than 30 days before arrival.</li>
            <li>For bookings made within 10 days of arrival, full payment via bank transfer or credit card is required.</li>
            <li>All payment-related charges shall be borne by the client.</li>
            <li>The total balance is due 30 days prior to arrival.</li>
            <li>Failure to pay the balance on time may result in cancellation of reservations and applicable cancellation charges.</li>
          </ul>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            Cancellation Policy (Unless Otherwise Agreed)
          </h2>
          <ul className="list-disc list-inside space-y-1">
            <li>Cancellations 30 days or more before arrival: No cancellation charges apply.</li>
            <li>Cancellations less than 30 days before arrival: 100% cancellation charge.</li>
            <li>Individual reservations cancelled less than 48 hours prior to arrival: 100% cancellation charge.</li>
          </ul>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            Changes or Cancellations by the Client
          </h2>
          <p>
            All cancellations or reductions must be confirmed in writing via email.
            Requests for alterations or cancellations must be received by Global Journey between Monday and Friday,
            09:15 to 17:00. Requests submitted outside these hours will be processed the next working day.
            We will do our best to accommodate change requests, subject to the above cancellation terms.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            COVID-19 Policy
          </h2>
          <p>
            Recognizing the unpredictability of global travel, Global Journey strives to provide the most flexible
            conditions possible. In cases where official government travel advisories (either in the client’s home
            country or the destination) necessitate cancellation, bookings can be cancelled free of charge. This does
            not apply to cancellations made at the traveller’s discretion when travel remains permitted.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">
            Supplier Availability
          </h2>
          <p>
            All accommodations and activities are subject to availability. We cannot guarantee supplier availability
            for any given date. For operational reasons, the sequence of visits may change and itineraries may be
            adjusted according to availability.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Hotels</h2>
          <p>
            Hotel ratings reflect the standard of comfort, amenities and services, which may vary by destination,
            adhering as closely as possible to internationally recognized “star rating” systems. Clients should review
            full property descriptions alongside star ratings.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Hostels</h2>
          <p>
            Hostel stays may incur extra charges for unoccupied beds. A security deposit may be required by hostel
            management upon arrival. Bed linen is included but bath towels are not.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Coaches</h2>
          <p>
            Coach transportation is limited to a maximum of 12 hours per day (between 08:00 and 21:00). Drivers’ meals
            and accommodation are included, excluding gratuities. European regulations may require changing drivers
            during longer tours or certain itineraries.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Room Occupancy</h2>
          <p>
            Twin rooms may be configured with two beds or a double bed plus a rollaway or sofa bed. Triple and quad
            rooms typically consist of a standard room with rollaway or sofa beds for extra occupants.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Child Policy</h2>
          <p>
            Unless otherwise stated, child rates apply for one child (aged 0–11) sharing a room with two full-paying
            adults. Different rates apply for family rooms accommodating 2 adults and 2 children; these are subject to
            availability.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Special Requests</h2>
          <p>
            Special requests (such as interconnecting or adjoining rooms) should be communicated as early as possible.
            We will forward these to the hotel but fulfilment cannot be guaranteed and depends on availability at
            check-in.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Check-in and Check-out</h2>
          <p>
            Hotel check-in and check-out times vary; please inquire for specific times. Generally, check-in is available
            from mid-afternoon (1pm–4pm) and rooms must be vacated by late morning (10am–12pm).
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Responsibility</h2>
          <p>
            It is the client's responsibility to ensure timely arrival for all scheduled services and activities. In
            line with European regulations, all passengers (including tour leaders) must remain seated with seatbelts
            fastened while vehicles are moving; non-compliance is at the passenger’s own risk and responsibility.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Complaints</h2>
          <p>
            We strive to provide fault-free service at all times. Should any issue arise, the client must notify us
            immediately at{" "}
            <a href="mailto:sales@globaljourney.net" className="text-blue-600 underline">
              sales@globaljourney.net
            </a>{" "}
            or using the emergency contact details provided with your travel documents. Failure to follow this process
            may affect any eligibility for compensation, as we must be given the opportunity to resolve issues promptly.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Data Protection</h2>
          <p>
            We adhere to all applicable data protection regulations, including the EU General Data Protection Regulation
            (GDPR). Personal data (including special category information such as allergies or disabilities and child
            data where relevant) is collected solely for fulfilling contractual obligations, is processed lawfully and
            securely and is never subject to automated decision-making. Information is retained only as long as
            necessary and is processed strictly as instructed by the client.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Liability</h2>
          <p>
            We act solely as a booking agent for the providers of services and accommodations. Global Journey is not
            responsible for any loss, damage, injury, delay or expense resulting from circumstances beyond our control,
            including but not limited to weather conditions, strikes, acts of governments, war, natural disasters or
            service provider defaults. Any itinerary changes required for passenger comfort, safety or operational
            reasons may be made at our discretion, with additional costs borne by the travellers.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Disputes</h2>
          <p>
            These terms and any contractual relationship with Global Journey are governed by the laws of Bulgaria. Any
            disputes arising will be subject to the exclusive jurisdiction of the Bulgarian courts.
          </p>

          <h2 className="text-2xl font-semibold bg-gradient-sunset bg-clip-text text-transparent">Contact</h2>
          <p>
            For assistance, contact us at{" "}
            <a href="mailto:sales@globaljourney.net" className="text-blue-600 underline">
              sales@globaljourney.net
            </a>
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsService;
