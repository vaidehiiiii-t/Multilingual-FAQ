
      var quill = new Quill("#answer", {
        theme: "snow",
      });


      document
        .getElementById("add-faq-form")
        .addEventListener("submit", function (e) {
          e.preventDefault();

          const question = document.getElementById("question").value;
          const answer = quill.root.innerHTML; 

         
          fetch("http://localhost:5000/api/faqs/add", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ question, answer }),
          })
            .then((response) => response.json())
            .then((data) => {
              alert(data.message);
              loadFAQs(); 
            })
            .catch((err) => console.error("Error adding FAQ:", err));
        });

     
      function loadFAQs() {
        fetch("http://localhost:5000/api/faqs")
          .then((response) => response.json())
          .then((faqs) => {
            const faqList = document.getElementById("faq-list");
            console.log(faqList);
            faqList.innerHTML = "";
            faqs.forEach((faq) => {
              const faqElement = document.createElement("div");
              faqElement.classList.add("bg-white", "p-6", "rounded-lg", "shadow-lg");
              faqElement.innerHTML = `
                <div class="font-semibold text-xl text-gray-800 mb-2">${faq.question}</div>
                <div class="text-gray-700">${faq.answer}</div>
                <button onclick="editFaq('${faq.id}')" class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">Edit</button>
                <button onclick="deleteFaq('${faq.id}')" class="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
              `;
              faqList.appendChild(faqElement);
            });
          })
          .catch((err) => console.error("Error fetching FAQs:", err));
      }

     

      loadFAQs(); 
      function editFaq(id) {
        const newQuestion = prompt("Enter updated question:");
        const newAnswer = prompt("Enter updated answer:");
        if (newQuestion && newAnswer) {
          fetch(`/api/faq/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ question: newQuestion, answer: newAnswer })
          }).then(() => loadFAQs());
        }
      }

      function deleteFaq(id) {
        if (confirm("Are you sure you want to delete this FAQ?")) {
          fetch(`/api/faq/${id}`, { method: 'DELETE' })
            .then(() => loadFAQs());
        }
      }
