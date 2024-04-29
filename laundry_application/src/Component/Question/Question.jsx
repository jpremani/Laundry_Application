import React from "react";
import "./Question.css";
const Question = () => {
  return (
    <div className="Question">
      <h1>
        KNOW MORE ABOUT WASHAHOLIC - BEST LAUNDRY & DRY CLEAN CHAIN IN INDIA
      </h1>
      <div class="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              How much time will take to wash my cloths?
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse "
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              For Wash & Fold, it takes up to 48 hours. while, for Wash & Iron,
              it takes anywhere between 2-3 days. These are standard delivery
              timings; however, it may take slightly longer due to factors
              beyond operational control.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              What if i need my cloths washed urgently ?
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              We provide an emergency service where you can get your clothes
              washed and ironed or washed and folded on the same day. However,
              an express service charge is levied for such urgent orders.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Do i need to sort my clothes before sending them ?
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse "
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              You do not need to sort your clothes. We encourage you to provide
              care instructions for special garments, however, our expert team
              is well-versed with the process of sorting. They will look after
              the sorting process for your garments. We expect you to inform
              about colour bleed possibilities, because we do not take
              responsibility for the same.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Do you use fresh water for my laundry
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse "
            aria-labelledby="headingFour"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Yes. At UClean, we are obsessed with Quality and Hygiene. We use
              fresh water for every wash cycle.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Do you take gurantee of color bleeding?
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse "
            aria-labelledby="headingFive"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              No. we use PH neutral and eco-friendly detergents for washing. In
              fact, we have different detergent compositions for different
              garment types. The process is gentle on your clothes, and we
              believe in treating your clothes with utmost care.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSix">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
              aria-expanded="false"
              aria-controls="collapseSix"
            >
              Do you use harsh detergents?
            </button>
          </h2>
          <div
            id="collapseSix"
            class="accordion-collapse collapse"
            aria-labelledby="headingSix"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              We do complimentary cuff and collar cleaning in laundry by kg. All
              washable stains are cleaned during washing process. However, hard
              stain treatment is chargeable depending on the size and hardness
              of stain.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingSeven">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
              aria-expanded="false"
              aria-controls="collapseSeven"
            >
              Do you do stain removel in laundry by Kg?
            </button>
          </h2>
          <div
            id="collapseSeven"
            class="accordion-collapse collapse"
            aria-labelledby="headingSeven"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              Our team makes informed sorting decision based on their
              experience. However, it is not possible to check every garment for
              colour bleeding in bulk washing. Thus, we always advise our
              customers to check for colour bleed and inform our store team
              about the same. We do not take responsibility for damages due to
              colour bleed
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
