import React from "react";

function AddSolverTab() {
    return (
        <>
            <div className="auth-main">
                <div className="auth-wrapper v1">
                    <div className="auth-form">
                        <div className="card my-5">
                            <div className="card-body">
                                <div className="text-center mb-4">
                                    <a href="#!">
                                        <img
                                            src="/assets/images/ftlogo.png"
                                            alt="img"
                                        />
                                    </a>
                                </div>
                                <h3 className="text-center f-w-500 mb-4">
                                    <b>Add Solver</b>
                                </h3>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="tel"
                                        className="form-control"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="universities"
                                        id="universities"
                                        className="form-control"
                                        data-trigger
                                    >
                                        <option value="None">
                                            Select University
                                        </option>
                                        <option value="Aviation and Aerospace University Bangladesh">
                                            Aviation and Aerospace University
                                            Bangladesh
                                        </option>
                                        <option value="Ahsanullah University of Science and Technology">
                                            Ahsanullah University of Science and
                                            Technology
                                        </option>
                                        <option value="American International University-Bangladesh">
                                            American International
                                            University-Bangladesh
                                        </option>
                                        <option value="Anwer Khan Modern University">
                                            Anwer Khan Modern University
                                        </option>
                                        <option value="ASA University Bangladesh">
                                            ASA University Bangladesh
                                        </option>
                                        <option value="Asian University for Women">
                                            Asian University for Women
                                        </option>
                                        <option value="Asian University of Bangladesh">
                                            Asian University of Bangladesh
                                        </option>
                                        <option value="Atish Dipankar University of Science and Technology">
                                            Atish Dipankar University of Science
                                            and Technology
                                        </option>
                                        <option value="Bandarban University">
                                            Bandarban University
                                        </option>
                                        <option value="Bangabandhu Sheikh Mujib Medical University">
                                            Bangabandhu Sheikh Mujib Medical
                                            University
                                        </option>
                                        <option value="Bangabandhu Sheikh Mujibur Rahman Agricultural University">
                                            Bangabandhu Sheikh Mujibur Rahman
                                            Agricultural University
                                        </option>
                                        <option value="Bangabandhu Sheikh Mujibur Rahman Maritime University">
                                            Bangabandhu Sheikh Mujibur Rahman
                                            Maritime University
                                        </option>
                                        <option value="Bangabandhu Sheikh Mujibur Rahman Science and Technology University">
                                            Bangabandhu Sheikh Mujibur Rahman
                                            Science and Technology University
                                        </option>
                                        <option value="Bangamata Sheikh Fojilatunnesa Mujib Science and Technology University">
                                            Bangamata Sheikh Fojilatunnesa Mujib
                                            Science and Technology University
                                        </option>
                                        <option value="Bangladesh Agricultural University">
                                            Bangladesh Agricultural University
                                        </option>
                                        <option value="Bangladesh Islami University">
                                            Bangladesh Islami University
                                        </option>
                                        <option value="Bangladesh University">
                                            Bangladesh University
                                        </option>
                                        <option value="Bangladesh University of Business and Technology">
                                            Bangladesh University of Business
                                            and Technology
                                        </option>
                                        <option value="Bangladesh University of Engineering and Technology">
                                            Bangladesh University of Engineering
                                            and Technology
                                        </option>
                                        <option value="Bangladesh University of Health Sciences">
                                            Bangladesh University of Health
                                            Sciences
                                        </option>
                                        <option value="Bangladesh University of Professionals">
                                            Bangladesh University of
                                            Professionals
                                        </option>
                                        <option value="Bangladesh University of Textiles">
                                            Bangladesh University of Textiles
                                        </option>
                                        <option value="Begum Gulchemonara Trust University">
                                            Begum Gulchemonara Trust University
                                        </option>
                                        <option value="Begum Rokeya University">
                                            Begum Rokeya University
                                        </option>
                                        <option value="BGMEA University of Fashion and Technology">
                                            BGMEA University of Fashion and
                                            Technology
                                        </option>
                                        <option value="BRAC University">
                                            BRAC University
                                        </option>
                                        <option value="Britannia University">
                                            Britannia University
                                        </option>
                                        <option value="Canadian University of Bangladesh">
                                            Canadian University of Bangladesh
                                        </option>
                                        <option value="CCN University of Science and Technology">
                                            CCN University of Science and
                                            Technology
                                        </option>
                                        <option value="Central University of Science and Technology">
                                            Central University of Science and
                                            Technology
                                        </option>
                                        <option value="Central Women's University">
                                            Central Women's University
                                        </option>
                                        <option value="Chittagong Independent University">
                                            Chittagong Independent University
                                        </option>
                                        <option value="Chittagong Medical University">
                                            Chittagong Medical University
                                        </option>
                                        <option value="Chittagong University of Engineering and Technology">
                                            Chittagong University of Engineering
                                            and Technology
                                        </option>
                                        <option value="Chittagong Veterinary and Animal Sciences University">
                                            Chittagong Veterinary and Animal
                                            Sciences University
                                        </option>
                                        <option value="City University">
                                            City University
                                        </option>
                                        <option value="Comilla University">
                                            Comilla University
                                        </option>
                                        <option value="Cox's Bazar International University">
                                            Cox's Bazar International University
                                        </option>
                                        <option value="Daffodil International University">
                                            Daffodil International University
                                        </option>
                                        <option value="Dhaka International University">
                                            Dhaka International University
                                        </option>
                                        <option value="Dhaka University of Engineering and Technology">
                                            Dhaka University of Engineering and
                                            Technology
                                        </option>
                                        <option value="East Delta University">
                                            East Delta University
                                        </option>
                                        <option value="East West University">
                                            East West University
                                        </option>
                                        <option value="Eastern University">
                                            Eastern University
                                        </option>
                                        <option value="European University of Bangladesh">
                                            European University of Bangladesh
                                        </option>
                                        <option value="Exim Bank Agricultural University of Bangladesh">
                                            Exim Bank Agricultural University of
                                            Bangladesh
                                        </option>
                                        <option value="Fareast International University">
                                            Fareast International University
                                        </option>
                                        <option value="Feni University">
                                            Feni University
                                        </option>
                                        <option value="First Capital University of Bangladesh">
                                            First Capital University of
                                            Bangladesh
                                        </option>
                                        <option value="German University Bangladesh">
                                            German University Bangladesh
                                        </option>
                                        <option value="Global University Bangladesh">
                                            Global University Bangladesh
                                        </option>
                                        <option value="Gono Bishwabidyalay">
                                            Gono Bishwabidyalay
                                        </option>
                                        <option value="Green University of Bangladesh">
                                            Green University of Bangladesh
                                        </option>
                                        <option value="Hajee Mohammad Danesh Science and Technology University">
                                            Hajee Mohammad Danesh Science and
                                            Technology University
                                        </option>
                                        <option value="Hamdard University of Bangladesh">
                                            Hamdard University of Bangladesh
                                        </option>
                                        <option value="IBAIS University">
                                            IBAIS University
                                        </option>
                                        <option value="Independent University">
                                            Independent University
                                        </option>
                                        <option value="International Islamic University">
                                            International Islamic University
                                        </option>
                                        <option value="International Standard University">
                                            International Standard University
                                        </option>
                                        <option value="International University of Business Agriculture and Technology">
                                            International University of Business
                                            Agriculture and Technology
                                        </option>
                                        <option value="Ishakha International University">
                                            Ishakha International University
                                        </option>
                                        <option value="Islamic Arabic University">
                                            Islamic Arabic University
                                        </option>
                                        <option value="Islamic University">
                                            Islamic University
                                        </option>
                                        <option value="Islamic University of Technology">
                                            Islamic University of Technology
                                        </option>
                                        <option value="Jagannath University">
                                            Jagannath University
                                        </option>
                                        <option value="Jahangirnagar University">
                                            Jahangirnagar University
                                        </option>
                                        <option value="Jatiya Kabi Kazi Nazrul Islam University">
                                            Jatiya Kabi Kazi Nazrul Islam
                                            University
                                        </option>
                                        <option value="Jessore University of Science and Technology">
                                            Jessore University of Science and
                                            Technology
                                        </option>
                                        <option value="Khulna Agricultural University">
                                            Khulna Agricultural University
                                        </option>
                                        <option value="Khulna University">
                                            Khulna University
                                        </option>
                                        <option value="Khulna University of Engineering and Technology">
                                            Khulna University of Engineering and
                                            Technology
                                        </option>
                                        <option value="Khwaja Yunus Ali University">
                                            Khwaja Yunus Ali University
                                        </option>
                                        <option value="Leading University">
                                            Leading University
                                        </option>
                                        <option value="Manarat International University">
                                            Manarat International University
                                        </option>
                                        <option value="Mawlana Bhashani Science and Technology University">
                                            Mawlana Bhashani Science and
                                            Technology University
                                        </option>
                                        <option value="Metropolitan University">
                                            Metropolitan University
                                        </option>
                                        <option value="N.P.I. University of Bangladesh">
                                            N.P.I. University of Bangladesh
                                        </option>
                                        <option value="National University">
                                            National University
                                        </option>
                                        <option value="Noakhali Science and Technology University">
                                            Noakhali Science and Technology
                                            University
                                        </option>
                                        <option value="North Bengal International University">
                                            North Bengal International
                                            University
                                        </option>
                                        <option value="North East University Bangladesh">
                                            North East University Bangladesh
                                        </option>
                                        <option value="North South University">
                                            North South University
                                        </option>
                                        <option value="North Western University">
                                            North Western University
                                        </option>
                                        <option value="Northern University of Bangladesh">
                                            Northern University of Bangladesh
                                        </option>
                                        <option value="Northern University of Business and Technology">
                                            Northern University of Business and
                                            Technology
                                        </option>
                                        <option value="Notre Dame University Bangladesh">
                                            Notre Dame University Bangladesh
                                        </option>
                                        <option value="Pabna Science and Technology University">
                                            Pabna Science and Technology
                                            University
                                        </option>
                                        <option value="Patuakhali Science and Technology University">
                                            Patuakhali Science and Technology
                                            University
                                        </option>
                                        <option value="Port City International University">
                                            Port City International University
                                        </option>
                                        <option value="Premier University">
                                            Premier University
                                        </option>
                                        <option value="Presidency University">
                                            Presidency University
                                        </option>
                                        <option value="Prime University">
                                            Prime University
                                        </option>
                                        <option value="Primeasia University">
                                            Primeasia University
                                        </option>
                                        <option value="Pundra University of Science and Technology">
                                            Pundra University of Science and
                                            Technology
                                        </option>
                                        <option value="Queens University">
                                            Queens University
                                        </option>
                                        <option value="Rabindra Maitree University">
                                            Rabindra Maitree University
                                        </option>
                                        <option value="Rabindra University">
                                            Rabindra University
                                        </option>
                                        <option value="Rajshahi Medical University">
                                            Rajshahi Medical University
                                        </option>
                                        <option value="Rajshahi Science and Technology University">
                                            Rajshahi Science and Technology
                                            University
                                        </option>
                                        <option value="Rajshahi University">
                                            Rajshahi University
                                        </option>
                                        <option value="Rajshahi University of Engineering and Technology">
                                            Rajshahi University of Engineering
                                            and Technology
                                        </option>
                                        <option value="Ranada Prasad Shaha University">
                                            Ranada Prasad Shaha University
                                        </option>
                                        <option value="Rangamati Science and Technology University">
                                            Rangamati Science and Technology
                                            University
                                        </option>
                                        <option value="Royal University of Dhaka">
                                            Royal University of Dhaka
                                        </option>
                                        <option value="Shahjalal University of Science and Technology">
                                            Shahjalal University of Science and
                                            Technology
                                        </option>
                                        <option value="Shanto Mariam University of Creative Technology">
                                            Shanto Mariam University of Creative
                                            Technology
                                        </option>
                                        <option value="Sheikh Fazilatunnesa Mujib University">
                                            Sheikh Fazilatunnesa Mujib
                                            University
                                        </option>
                                        <option value="Sheikh Hasina University">
                                            Sheikh Hasina University
                                        </option>
                                        <option value="Sher-e-Bangla Agricultural University">
                                            Sher-e-Bangla Agricultural
                                            University
                                        </option>
                                        <option value="Sonargaon University">
                                            Sonargaon University
                                        </option>
                                        <option value="Southeast University">
                                            Southeast University
                                        </option>
                                        <option value="Southern University Bangladesh">
                                            Southern University Bangladesh
                                        </option>
                                        <option value="Stamford University Bangladesh">
                                            Stamford University Bangladesh
                                        </option>
                                        <option value="State University of Bangladesh">
                                            State University of Bangladesh
                                        </option>
                                        <option value="Sylhet Agricultural University">
                                            Sylhet Agricultural University
                                        </option>
                                        <option value="Sylhet International University">
                                            Sylhet International University
                                        </option>
                                        <option value="Sylhet Medical University">
                                            Sylhet Medical University
                                        </option>
                                        <option value="The International University of Scholars">
                                            The International University of
                                            Scholars
                                        </option>
                                        <option value="The Millenium University">
                                            The Millenium University
                                        </option>
                                        <option value="The People's University of Bangladesh">
                                            The People's University of
                                            Bangladesh
                                        </option>
                                        <option value="Times University of Bangladesh">
                                            Times University of Bangladesh
                                        </option>
                                        <option value="United International University">
                                            United International University
                                        </option>
                                        <option value="University of Asia Pacific">
                                            University of Asia Pacific
                                        </option>
                                        <option value="University of Barisal">
                                            University of Barisal
                                        </option>
                                        <option value="University of Chittagong">
                                            University of Chittagong
                                        </option>
                                        <option value="University of Creative Technology">
                                            University of Creative Technology
                                        </option>
                                        <option value="University of Development Alternative">
                                            University of Development
                                            Alternative
                                        </option>
                                        <option value="University of Dhaka">
                                            University of Dhaka
                                        </option>
                                        <option value="University of Global Village">
                                            University of Global Village
                                        </option>
                                        <option value="University of Information Technology and Sciences">
                                            University of Information Technology
                                            and Sciences
                                        </option>
                                        <option value="University of Liberal Arts Bangladesh">
                                            University of Liberal Arts
                                            Bangladesh
                                        </option>
                                        <option value="University of Science and Technology Chittagong">
                                            University of Science and Technology
                                            Chittagong
                                        </option>
                                        <option value="University of South Asia">
                                            University of South Asia
                                        </option>
                                        <option value="Uttara University">
                                            Uttara University
                                        </option>
                                        <option value="Varendra University">
                                            Varendra University
                                        </option>
                                        <option value="Victoria University of Bangladesh">
                                            Victoria University of Bangladesh
                                        </option>
                                        <option value="World University of Bangladesh">
                                            World University of Bangladesh
                                        </option>
                                        <option value="Z.H. Sikder University of Science and Technology">
                                            Z.H. Sikder University of Science
                                            and Technology
                                        </option>
                                        <option value="ZNRF University of Management Sciences">
                                            ZNRF University of Management
                                            Sciences
                                        </option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select
                                        name="disciplines"
                                        id="disciplines"
                                        className="form-control"
                                        data-trigger
                                    >
                                        <option value="None">
                                            Select Departemnt
                                        </option>
                                        <option value="Accounting">
                                            Accounting
                                        </option>
                                        <option value="Applied Chemistry">
                                            Applied Chemistry
                                        </option>
                                        <option value="Archaeology">
                                            Archaeology
                                        </option>
                                        <option value="Architecture">
                                            Architecture
                                        </option>
                                        <option value="Aeronautical Engineering (Aerospace)">
                                            Aeronautical Engineering (Aerospace)
                                        </option>
                                        <option value="Aeronautical Engineering (Avionics)">
                                            Aeronautical Engineering (Avionics)
                                        </option>
                                        <option value="Aircraft Maintainance Engineering (Avionics)">
                                            Aircraft Maintainance Engineering
                                            (Avionics)
                                        </option>
                                        <option value="Aircraft Maintainance Engineering (A&P)">
                                            Aeronautical Engineering (A&amp;P)
                                        </option>
                                        <option value="Arts">Arts</option>
                                        <option value="Accounting & Information System">
                                            Accounting &amp; Information System
                                        </option>
                                        <option value="Applied Physics">
                                            Applied Physics
                                        </option>
                                        <option value="Agrotechnology">
                                            Agrotechnology
                                        </option>
                                        <option value="Arabic">Arabic</option>
                                        <option value="Anthropology">
                                            Anthropology
                                        </option>
                                        <option value="Banking">Banking</option>
                                        <option value="Biochemistry">
                                            Biochemistry
                                        </option>
                                        <option value="Biology">Biology</option>
                                        <option value="Biotechnology">
                                            Biotechnology
                                        </option>
                                        <option value="Business Administration">
                                            Business Administration
                                        </option>
                                        <option value="Business Studies">
                                            Business Studies
                                        </option>
                                        <option value="Brand Management">
                                            Brand Management
                                        </option>
                                        <option value="Botany">Botany</option>
                                        <option value="Bengali">Bengali</option>
                                        <option value="International Business">
                                            International Business
                                        </option>
                                        <option value="Chemical Technical/Engineering">
                                            Chemical Technical/Engineering
                                        </option>
                                        <option value="Civil Engineering">
                                            Civil Engineering
                                        </option>
                                        <option value="Commerce">
                                            Commerce
                                        </option>
                                        <option value="Computer Applications">
                                            Computer Applications
                                        </option>
                                        <option value="Computer Engineering">
                                            Computer Engineering
                                        </option>
                                        <option value="Computer Science">
                                            Computer Science
                                        </option>
                                        <option value="Computing & Information System">
                                            Computing &amp; Information System
                                        </option>
                                        <option value="Cost Accounting">
                                            Cost Accounting
                                        </option>
                                        <option value="Cost & Management Accounting">
                                            Cost &amp; Management Accounting
                                        </option>
                                        <option value="Chemistry">
                                            Chemistry
                                        </option>
                                        <option value="Development Studies">
                                            Development Studies
                                        </option>
                                        <option value="Education">
                                            Education
                                        </option>
                                        <option value="Film and Media">
                                            Film and Media
                                        </option>
                                        <option value="Industrial Engineering">
                                            Industrial Engineering
                                        </option>
                                        <option value="Industrial Management">
                                            Industrial Management
                                        </option>
                                        <option value="Industrial Relations">
                                            Industrial Relations
                                        </option>
                                        <option value="Management Studies/Science">
                                            Management Studies/Science
                                        </option>
                                        <option value="Economics">
                                            Economics
                                        </option>
                                        <option value="Electrical & Electronic Engineering">
                                            Electrical &amp; Electronic
                                            Engineering
                                        </option>
                                        <option value="English">English</option>
                                        <option value="Environmental Planning">
                                            Environmental Planning
                                        </option>
                                        <option value="Electronics">
                                            Electronics
                                        </option>
                                        <option value="Electronics and Telecommunication Engineering">
                                            Electronics and Telecommunication
                                            Engineering
                                        </option>
                                        <option value="Environmental Science">
                                            Environmental Science
                                        </option>
                                        <option value="Finance">Finance</option>
                                        <option value="Fine Arts">
                                            Fine Arts
                                        </option>
                                        <option value="Finance & Banking">
                                            Finance &amp; Banking
                                        </option>
                                        <option value="Forestry">
                                            Forestry
                                        </option>
                                        <option value="Fisheries">
                                            Fisheries
                                        </option>
                                        <option value="Information Engineering">
                                            Information Engineering
                                        </option>
                                        <option value="Information Systems">
                                            Information Systems
                                        </option>
                                        <option value="Genetics">
                                            Genetics
                                        </option>
                                        <option value="Geography">
                                            Geography
                                        </option>
                                        <option value="Geology">Geology</option>
                                        <option value="Government & Politics">
                                            Government &amp; Politics
                                        </option>
                                        <option value="Geography and Environment">
                                            Geography and Environment
                                        </option>
                                        <option value="Hospitality Management">
                                            Hospitality Management
                                        </option>
                                        <option value="Human Resource Management">
                                            Human Resource Management
                                        </option>
                                        <option value="History">History</option>
                                        <option value="Horticulture">
                                            Horticulture
                                        </option>
                                        <option value="Information Technology">
                                            Information Technology
                                        </option>
                                        <option value="Insurance">
                                            Insurance
                                        </option>
                                        <option value="International Relations">
                                            International Relations
                                        </option>
                                        <option value="Industrial Eng & Production">
                                            Industrial Eng &amp; Production
                                        </option>
                                        <option value="Journalism">
                                            Journalism
                                        </option>
                                        <option value="Mass Communication & Journalism">
                                            Mass Communication &amp; Journalism
                                        </option>
                                        <option value="Marketing">
                                            Marketing
                                        </option>
                                        <option value="Service Marketing">
                                            Service Marketing
                                        </option>
                                        <option value="Sanskrit & Pali">
                                            Sanskrit &amp; Pali
                                        </option>
                                        <option value="Law">Law</option>
                                        <option value="Linguistics">
                                            Linguistics
                                        </option>
                                        <option value="Language">
                                            Language
                                        </option>
                                        <option value="Management Information System">
                                            Management Information System
                                        </option>
                                        <option value="Mathematics">
                                            Mathematics
                                        </option>
                                        <option value="Mechanical Engineering">
                                            Mechanical Engineering
                                        </option>
                                        <option value="Management">
                                            Management
                                        </option>
                                        <option value="Microbiology">
                                            Microbiology
                                        </option>
                                        <option value="Medicine">
                                            Medicine
                                        </option>
                                        <option value="Materials & Metallurgical Engineering">
                                            Materials &amp; Metallurgical
                                            Engineering
                                        </option>
                                        <option value="Marine Engineering">
                                            Marine Engineering
                                        </option>
                                        <option value="Naval Architecture and Marine Engineering">
                                            Naval Architecture and Marine
                                            Engineering
                                        </option>
                                        <option value="Nautical Science">
                                            Nautical Science
                                        </option>
                                        <option value="Personnel Management">
                                            Personnel Management
                                        </option>
                                        <option value="Pharmacology">
                                            Pharmacology
                                        </option>
                                        <option value="Philosophy">
                                            Philosophy
                                        </option>
                                        <option value="Physics">Physics</option>
                                        <option value="Political Science">
                                            Political Science
                                        </option>
                                        <option value="Psychology">
                                            Psychology
                                        </option>
                                        <option value="Public Administration">
                                            Public Administration
                                        </option>
                                        <option value="Public Relations">
                                            Public Relations
                                        </option>
                                        <option value="Pharmacy">
                                            Pharmacy
                                        </option>
                                        <option value="Pharmaceutical Technology">
                                            Pharmaceutical Technology
                                        </option>
                                        <option value="Social Science">
                                            Social Science
                                        </option>
                                        <option value="Statistics">
                                            Statistics
                                        </option>
                                        <option value="Strategic Management">
                                            Strategic Management
                                        </option>
                                        <option value="Supply Chain Management">
                                            Supply Chain Management
                                        </option>
                                        <option value="Sociology">
                                            Sociology
                                        </option>
                                        <option value="Science">Science</option>
                                        <option value="Telecommunication">
                                            Telecommunication
                                        </option>
                                        <option value="Textile Technology">
                                            Textile Technology
                                        </option>
                                        <option value="Theater & Music">
                                            Theater &amp; Music
                                        </option>
                                        <option value="Urban & Regional Planning">
                                            Urban &amp; Regional Planning
                                        </option>
                                        <option value="Urdu & Persian">
                                            Urdu &amp; Persian
                                        </option>
                                        <option value="Veterinary Science">
                                            Veterinary Science
                                        </option>
                                        <option value="Water Resources Engineering">
                                            Water Resources Engineering
                                        </option>
                                        <option value="World Religions">
                                            World Religions
                                        </option>
                                        <option value="Women Studies">
                                            Women Studies
                                        </option>
                                        <option value="Zoology">Zoology</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <div className="d-grid mt-4">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                    >
                                        Add Solver
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AddSolverTab;
