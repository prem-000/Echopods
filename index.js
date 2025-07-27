const productData = [
  // IN-EAR (7 items)
  {
    name: "Noise N1",
    battery: "20 hrs",
    price: "₹1,999",
    features: ["Bass Boost", "Waterproof", "Bluetooth 5.3"],
    image: "https://example.com/images/noise-n1.jpg"
  },
  {
    name: "Boat Airdopes 141",
    battery: "42 hrs",
    price: "₹1,299",
    features: ["ENx Technology", "ASAP Charge", "IPX4"],
    image: "https://example.com/images/boat-airdopes-141.jpg"
  },
  {
    name: "Realme Buds Air 3",
    battery: "30 hrs",
    price: "₹3,999",
    features: ["ANC", "Transparency Mode", "10mm Drivers"],
    image: "https://example.com/images/realme-buds-air-3.jpg"
  },
  {
    name: "OnePlus Nord Buds",
    battery: "30 hrs",
    price: "₹2,499",
    features: ["Dolby Atmos", "Fast Pair", "IP55 Rating"],
    image: "https://example.com/images/oneplus-nord-buds.jpg"
  },
  {
    name: "JBL Wave 200",
    battery: "20 hrs",
    price: "₹2,799",
    features: ["Deep Bass", "Voice Assistant", "Touch Controls"],
    image: "https://example.com/images/jbl-wave-200.jpg"
  },
  {
    name: "Boult Audio Omega",
    battery: "32 hrs",
    price: "₹1,799",
    features: ["Zen Mode ENC", "Fast Charging", "IPX5"],
    image: "https://example.com/images/boult-audio-omega.jpg"
  },
  {
    name: "Mivi DuoPods M80",
    battery: "30 hrs",
    price: "₹1,199",
    features: ["Studio Sound", "Touch Control", "Bluetooth 5.0"],
    image: "https://example.com/images/mivi-duopods-m80.jpg"
  },

  // SEMI-IN-EAR (9 items)
  {
    name: "Skullcandy Indy",
    battery: "24 hrs",
    price: "₹3,499",
    features: ["Secure Fit", "Tile Tracker", "IP55"],
    image: "https://example.com/images/skullcandy-indy.jpg"
  },
  {
    name: "Apple AirPods 2",
    battery: "24 hrs",
    price: "₹12,999",
    features: ["H1 Chip", "Siri Support", "Auto Switching"],
    image: "https://example.com/images/apple-airpods-2.jpg"
  },
  {
    name: "Huawei FreeBuds 4",
    battery: "22 hrs",
    price: "₹8,999",
    features: ["Open-fit ANC", "Low Latency", "Bluetooth 5.2"],
    image: "https://example.com/images/huawei-freebuds-4.jpg"
  },
  {
    name: "Oppo Enco Free 2",
    battery: "30 hrs",
    price: "₹6,499",
    features: ["Triple Mic", "Personalized ANC", "10mm Drivers"],
    image: "https://example.com/images/oppo-enco-free-2.jpg"
  },
  {
    name: "Samsung Galaxy Buds Live",
    battery: "21 hrs",
    price: "₹6,990",
    features: ["Ergonomic Fit", "Bixby", "AKG Sound"],
    image: "https://example.com/images/samsung-galaxy-buds-live.jpg"
  },
  {
    name: "Sony LinkBuds S",
    battery: "20 hrs",
    price: "₹13,990",
    features: ["Adaptive Sound", "Speak-to-Chat", "ANC"],
    image: "https://example.com/images/sony-linkbuds-s.jpg"
  },
  {
    name: "Honor Choice Earbuds X",
    battery: "28 hrs",
    price: "₹1,999",
    features: ["Low Latency", "Dual Mic ENC", "Bluetooth 5.3"],
    image: "https://example.com/images/honor-choice-earbuds-x.jpg"
  },
  {
    name: "QCY T13",
    battery: "40 hrs",
    price: "₹1,399",
    features: ["4 Mic ENC", "Touch Control", "Quick Pairing"],
    image: "https://example.com/images/qcy-t13.jpg"
  },
  {
    name: "Lenovo HT28",
    battery: "20 hrs",
    price: "₹1,299",
    features: ["Gaming Mode", "Touch Control", "Stereo Bass"],
    image: "https://example.com/images/lenovo-ht28.jpg"
  },

  // WIRELESS (9 items)
  {
    name: "Noise Air Buds 2",
    battery: "40 hrs",
    price: "₹1,799",
    features: ["Quad Mic", "ENC", "Bluetooth 5.3"],
    image: "https://example.com/images/noise-air-buds-2.jpg"
  },
  {
    name: "Sony WF-1000XM4",
    battery: "36 hrs",
    price: "₹19,990",
    features: ["LDAC", "ANC", "IPX4"],
    image: "https://example.com/images/sony-wf-1000xm4.jpg"
  },
  {
    name: "Bose QC Earbuds II",
    battery: "24 hrs",
    price: "₹24,990",
    features: ["Custom ANC", "Hi-Fi Sound", "Touch Control"],
    image: "https://example.com/images/bose-qc-earbuds-ii.jpg"
  },
  {
    name: "Beats Studio Buds",
    battery: "24 hrs",
    price: "₹14,999",
    features: ["ANC", "Spatial Audio", "USB-C"],
    image: "https://example.com/images/beats-studio-buds.jpg"
  },
  {
    name: "Sennheiser Momentum TW3",
    battery: "28 hrs",
    price: "₹21,990",
    features: ["TrueResponse Driver", "Adaptive ANC", "IPX4"],
    image: "https://example.com/images/sennheiser-momentum-tw3.jpg"
  },
  {
    name: "Jabra Elite 7",
    battery: "30 hrs",
    price: "₹15,999",
    features: ["MultiSensor Voice", "ANC", "IP57"],
    image: "https://example.com/images/jabra-elite-7.jpg"
  },
  {
    name: "Cambridge Audio Melomania",
    battery: "45 hrs",
    price: "₹9,999",
    features: ["Hi-Fi Grade Amp", "Transparency Mode", "Bluetooth 5.0"],
    image: "https://example.com/images/cambridge-audio-melomania.jpg"
  },
  {
    name: "Soundcore Liberty 3",
    battery: "32 hrs",
    price: "₹12,499",
    features: ["HearID ANC", "3D Surround", "LDAC"],
    image: "https://example.com/images/soundcore-liberty-3.jpg"
  },
  {
    name: "Edifier TWS NB2",
    battery: "32 hrs",
    price: "₹6,499",
    features: ["Hybrid ANC", "Gaming Mode", "Fast Charging"],
    image: "https://example.com/images/edifier-tws-nb2.jpg"
  },

  // CANAL TYPE (9 items)
  {
    name: "Tribit FlyBuds C1",
    battery: "50 hrs",
    price: "₹3,499",
    features: ["aptX", "CVC 8.0", "Dual Mic"],
    image: "https://example.com/images/tribit-flybuds-c1.jpg"
  },
  {
    name: "JBL Endurance RunBT",
    battery: "6 hrs",
    price: "₹1,799",
    features: ["TwistLock", "Sweatproof", "Magnetic Buds"],
    image: "https://example.com/images/jbl-endurance-runbt.jpg"
  },
  {
    name: "AKG N400",
    battery: "12 hrs",
    price: "₹9,999",
    features: ["ANC", "AKG Signature Sound", "Wireless Charging"],
    image: "https://example.com/images/akg-n400.jpg"
  },
  {
    name: "RHA T20 Wireless",
    battery: "12 hrs",
    price: "₹18,999",
    features: ["DualCoil Driver", "IPX4", "Detachable Cable"],
    image: "https://example.com/images/rha-t20-wireless.jpg"
  },
  {
    name: "Shure AONIC 215",
    battery: "8 hrs",
    price: "₹19,990",
    features: ["Secure Fit", "Detachable Cable", "Noise Isolation"],
    image: "https://example.com/images/shure-aonic-215.jpg"
  },
  {
    name: "1More Triple Driver",
    battery: "N/A",
    price: "₹8,999",
    features: ["3 Drivers", "Hi-Res Audio", "Wired"],
    image: "https://example.com/images/1more-triple-driver.jpg"
  },
  {
    name: "FiiO FH5s",
    battery: "N/A",
    price: "₹21,999",
    features: ["4 Drivers", "MMCX Cable", "Sound Tuning"],
    image: "https://example.com/images/fiio-fh5s.jpg"
  },
  {
    name: "KZ ZS10 Pro",
    battery: "N/A",
    price: "₹3,299",
    features: ["Hybrid Drivers", "Metal Shell", "Detachable Cable"],
    image: "https://example.com/images/kz-zs10-pro.jpg"
  },
  {
    name: "Moondrop Aria",
    battery: "N/A",
    price: "₹7,999",
    features: ["LCP Diaphragm", "Hi-Fi Sound", "Detachable Cable"],
    image: "https://example.com/images/moondrop-aria.jpg"
  },
  {
    name: "TinHiFi T2",
    battery: "N/A",
    price: "₹5,499",
    features: ["Dual Dynamic Drivers", "Aerospace Metal", "Wired"],
    image: "https://example.com/images/tinhifi-t2.jpg"
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const detailsButtons = document.querySelectorAll("button2.details-btn");

  

  detailsButtons.forEach((button) => {
    button.addEventListener("click", () => {
        
      const index = button.getAttribute("data-index");

    const modelParagraph = button.parentElement.querySelector("p");
    if (modelParagraph) {
        modelParagraph.style.display = "none";
    }

      // Check if details container exists, otherwise create it
      let detailsContainer = button.parentElement.querySelector(".product-details");
      if (!detailsContainer) {
        detailsContainer = document.createElement("div");
        detailsContainer.classList.add("product-details");
        button.insertAdjacentElement("afterend", detailsContainer);
      }

      // Insert product details
      const product = productData[index];
      detailsContainer.innerHTML = `
        <p3><strong>Name :- </strong> ${product.name}</p3>
        <p3><strong>Battery :- </strong> ${product.battery}</p3>
        <p3><strong>Price :- </strong> ${product.price}</p3>
        <p3><strong>Features  </strong> ${product.features.join(", ")}</p3>
      `;
      detailsContainer.classList.add("details-btn");
      

    });
  });
});

const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => {
    const search = searchInput.value.trim().toLowerCase();
    
    if (search === "") return;

    // Filter productData
    const results = productData.filter(product =>
        product.name.toLowerCase().includes(search)
    );

    // Clear the entire page
    document.body.innerHTML = "";

    // Create a container for results
    const container = document.createElement("div");
    container.style.padding = "20px";
    //container.innerHTML = `<h1>Search Results for "${search}"</h1>`;

    // Add results
    if (results.length === 0) {
        container.innerHTML += `<p>No results found.</p>`;
    } else {
        results.forEach(product => {
            const card = document.createElement("div");
            card.className = "product-card";
            card.style.border = "1px solid #ccc";
            card.style.margin = "10px 0";
            card.style.padding = "10px";
            card.innerHTML = `
                <h2>${product.name}</h2>
                <p><strong>Battery:</strong> ${product.battery}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p><strong>Features:</strong> ${product.features.join(", ")}</p>
                <button1 class="itemsinfo" id="buy">buy</button1>
            `;
            container.appendChild(card);

        });
    }

    document.body.appendChild(container);
});

// function changeEvent() {
//   window.location.href = "profile.html";
// }

// function changeEvent1() {
//   document.body.textContent = "";
// }


function changeEvent(name,Number,email) {
    window.location.href="profile.html";
    //let li=document.createElement("li");
    //li.classList.add("profile.html");
    //document.body.appendChild(li);
}

function changeEvent1(){
    window.Location.innerHTML="cart.html";
}









