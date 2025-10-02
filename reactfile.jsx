const execomMembers = [
  { name: "Dr. Elizabeth Rita Samuel", role: "Branch Counsellor", image: "Execom/Dr. Elizabeth Rita Samuel.jpg" },
  { name: "Rinza Yunus", role: "Chair", image: "Rinza Yunus.jpg.JPG" },
  { name: "Alias Eldo", role: "Vice-Chair", image: "AliasEldo.jpg" },
  { name: "Amelin Alexander Rathappillil", role: "Secretary", image: "amelin alexander.jpg" },
  { name: "Athira Ajay", role: "Treasurer", image: "athira ajay.jpg" },
  { name: "Jala Vishwa Keerthi", role: "Technical Coordinator", image: "jala vishwa keerthi.png" },
  { name: "Adriel Bobby", role: "Electronic Communications Coordinator", image: "Adriel Bobby.jpg" },
  { name: "Sangeeth M S", role: "Membership Development Coordinator", image: "Sangeeth m s.jpg" },
  { name: "Behanan K Bahanan", role: "Membership Development Coordinator", image: "Behanan K Bahanan.jpg" },
  { name: "Krishnapriya M", role: "Membership Development Coordinator", image: "Krishnapriya m.jpg" },
  { name: "Noahan Zachariah Pradeep", role: "Membership Development Coordinator", image: "Noahan zacharia.png" },
  { name: "Arun Vijo Tharakan", role: "Webmaster", image: "Arun vijo.jpeg" },
  { name: "Aparna Mahesh", role: "Webmaster", image: "aparna mahesh.jpg" },
  { name: "Ryyan Safar", role: "LINK Representative", image: "Ryyan Safar.png" },
  { name: "Abhinav S", role: "Design Lead", image: "abhinav s 2.png" },
  { name: "Sabharish P V", role: "Design Lead", image: "Sabharish P V.jpg" },
  { name: "Devamanas S", role: "Media Lead", image: "Devamanas S.JPG" },
  { name: "Abhishek Iype", role: "Utility Lead", image: "Abhishek Iype.jpg" }
];

const powerEnergyMembers = [
  { name: "Hans John D'Cruz", role: "Chapter Advisor", image: "Execom/Hans John D'Cruz.png" },
  { name: "Diya Sarah", role: "Chair", image: "Diya Sarah.jpg" },
  { name: "Ashish John Binu", role: "Vice-Chair", image: "Ashish John Binu.jpg" },
  { name: "Neha Biju", role: "Secretary", image: "Neha Biju.JPEG" },
  { name: "Joel John Thumpayil", role: "Treasurer", image: "Joel John Thumpayil.jpg" }
];

const industrialMembers = [
  { name: "Namitha Mariam John", role: "Chair", image: "Namitha Mariam John.jpeg" },
  { name: "Darsan Dileep", role: "Vice-Chair", image: "Darsan Dileep.JPG" },
  { name: "Shreya M", role: "Secretary", image: "Shreya M.JPG" },
  { name: "Nia Jobby", role: "Treasurer", image: "Nia Jobby .jpg" }
];

const computerMembers = [
  { name: "Ms. Anu Maria Joykutty", role: "Chapter Advisor", image: "Execom/Mrs. Anu Maria Joykutty.jpg" },
  { name: "Navaneeth K.B", role: "Chair", image: "Navaneeth K.B.jpg" },
  { name: "Richard", role: "Vice-Chair", image: "Richard 1.jpg" },
  { name: "Joel John Thumpayil", role: "Secretary", image: "Joel John Thumpayil.jpg" },
  { name: "Punya D", role: "Treasurer", image: "Punya D.JPG" }
];

const wieMembers = [
  { name: "Dr. Suma V", role: "Chapter Advisor", image: "Execom/Dr. Suma V.jpg" },
  { name: "Sreepriya S", role: "Chair", image: "Sreepriya.jpg" },
  { name: "Anagha N Nath", role: "Vice-Chair", image: "Anagha N Nath.jpg" },
  { name: "Neha R Jacob", role: "Secretary", image: "Neha R Jacob.jpg" },
  { name: "Ananya Merlyn George", role: "Treasurer", image: "Ananya Merlyn George .jpg" }
];

const roboticsMembers = [
  { name: "Dr. Ajith Kumar P.P", role: "Chapter Advisor", image: "Execom/Dr. Ajith Kumar P.P.jpg" },
  { name: "Abner Sebastian Lopez", role: "Chair", image: "Abner Sebastian Lopez .jpg" },
  { name: "Akul Prasanth", role: "Vice-Chair", image: "Akul Prasanth .jpg" },
  { name: "Adheetha Krishnaja", role: "Secretary", image: "Adheetha krishnaja .jpg" },
  { name: "Milee B Kokkatt", role: "Treasurer", image: "MILEE B KOKKATT.jpg" }
];

const TeamSection = ({ title, members }) => (
  <div>
    <h2 style={{ fontFamily: "IEEE, sans-serif", fontWeight: "700", letterSpacing: "1px", margin: "20px 0" }}>
      {title}
    </h2>
    <hr style={{ borderColor: "#0072c6", marginBottom: "20px" }} />
    <div className="row">
      {members.map((person, idx) => (
        <div className="card" key={idx}>
          <div className="our-team">
            <img src={person.image} alt={person.name} />
            <div className="team-content">
              <h3 className="title">{person.name}</h3>
              <span className="post">{person.role}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const App = () => (
  <div className="container">
    <TeamSection title="EXE-COM" members={execomMembers} />
    <TeamSection title="POWER AND ENERGY SOCIETY" members={powerEnergyMembers} />
    <TeamSection title="INDUSTRIAL APPLICATIONS SOCIETY" members={industrialMembers} />
    <TeamSection title="COMPUTER SOCIETY" members={computerMembers} />
    <TeamSection title="WOMEN IN ENGINEERING" members={wieMembers} />
    <TeamSection title="ROBOTICS & AUTOMATION SOCIETY" members={roboticsMembers} />
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
