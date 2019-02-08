import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "textBook";
  selectedChapters: Array<any> = [];
  selection: boolean = false;
  searchActive:boolean=false;
  Subjects: Array<any> = [
    { id: 0, subject: "Mathematics" },
    { id: 1, subject: "Physics" },
    { id: 2, subject: "Chemistry" }
  ];
  Chapters: Array<any> = [];
  topics: Array<any> = [];
  searchResults:Array<any> =[];
  TextBookData: Array<any> = [
    {
      subject: "Mathematics",
      chapters: [
        {
          chapterName: "Fundamental Operations on Integers",
          topics: [
            "Subtracting using the number line",
            "Add/subtract 2 or more integers",
            "Additive Identity",
            "Multiplicative Identity",
            "Additive Inverse"
          ]
        },
        {
          chapterName: "Fractions",
          topics: [
            "Understand Proper Fractions",
            "Understand Improper Fractions",
            "Convert improper fractions to proper fractions",
            "Convert mixed fractions to improper fractions",
            "Identify Equivalent fractions",
            "Find equivalent fractions through division",
            "Simplest form of a fraction",
            "Reduce to simplest form",
            "Like and Unlike Fractions"
          ]
        },
        {
          chapterName: "Exponents and Powers",
          topics: ["Exponential Form", "Constant terms", "Coefficients"]
        }
      ]
    },
    {
      subject: "Physics",
      chapters: [
        {
          chapterName: "Kinematics",
          topics: ["Motion", "Distance", "Speed", "Position and Displacement"]
        },
        {
          chapterName: "Vectors",
          topics: ["Scalar", "Vectors"]
        },
        {
          chapterName: "Friction",
          topics: [
            "Introduction to Friction",
            "Minimising Friction",
            "Incresing Friction",
            "Types of Friction",
            "More on Friction"
          ]
        }
      ]
    },
    {
      subject: "Chemistry",
      chapters: [
        {
          chapterName: "Chemical Bonding",
          topics: ["Ionic Bond", "Covalent Bond", "Electronic Configuration"]
        },
        {
          chapterName: "Periodic Classification",
          topics: [
            "Early History of Perodic Table",
            "Mendeleev's Periodic Table"
          ]
        },
        {
          chapterName: "Atomic Structure",
          topics: [
            "Atom",
            "Proton",
            "Electron",
            "Neutron",
            "Orbital",
            "Valance Electrons"
          ]
        },
        {
          chapterName: "Language of Chemistry",
          topics: [
            "Chemical Symbols and formulas",
            "Balancing Chemical Equations"
          ]
        }
      ]
    }
  ];
  ngOnInit() {
    let source=this.TextBookData;
    let topics=[];
    for(let i=0;i<source.length;i++){
      for(let j=0;j<source[i].chapters.length;j++){
        this.Chapters.push(source[i].chapters[j].chapterName.toLowerCase());
        topics.push.apply(topics,source[i].chapters[j]['topics']);
      }
    }
    this.topics=topics.map(item=>{
      return item.toLowerCase();
    });
  }
  search(event) {
    let value = (event.target.value).toLowerCase();
    this.selection = false;
    let searchResults1=[],searchResults2=[];
    if(value!=""){
      this.searchActive=true;
    searchResults1=this.topics.filter(topic=>{
      return topic.indexOf(value)!=-1
    });
    searchResults2=this.Chapters.filter(Chapter=>{
      return Chapter.indexOf(value)!=-1
    });
   this.searchResults=searchResults1.concat(searchResults2);
  }else{
    this.searchActive=false;
  }
  }
  chooseSubject(event) {
    let subject = event.target.innerHTML;
    for (let i = 0; i < this.TextBookData.length; i++) {
      if (subject == this.TextBookData[i].subject) {
        this.selectedChapters = this.TextBookData[i].chapters;
        this.selection = true;
       
      }
    }
  }
}
