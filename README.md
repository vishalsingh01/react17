# React.js

Banuprakash C

Full Stack Architect, Corporate Trainer,

Co-founder Lucida Technologies Pvt Ltd.,

Email: banu@lucidatechnologies.com; banuprakashc@yahoo.co.in

https://www.linkedin.com/in/banu-prakash-50416019/


Github: https://github.com/BanuPrakash/react17
-------------------------------------------------------------------------


Softwares Required:
1) Chrome Webbrowser
	1.1) add React Developer tools
	1.2) add Redux DevTools
2) Visual Studio Code
3) NodeJS Latest LTS

--------------------------------------------
Pretest: https://www.classmarker.com/online-test/start/?quiz=93v5fb285d054d69

------------------------------------------------------------------

JavaScript: oop, HOF, Webpack

-------------------------------

	Webpack, grunt, gulp ==> JavaScript tools

	1) Bundle the javascript files

		first.js
		second.js
		third.js
		index.js


		<script src="first.js"></script>
		<script src="second.js"></script>
		...
		<script src="index.js"></script>

		Issue: 
			order has to be maintained; 
			many hits to the server; 
			code is exposed; 
			size of file is hugh
			Code might have been written in TypeScript; coffescript; or ES6 or ES7
			==> converted to ES5 or below version

			Babel ==> ES6/7 ==> lower version transpile [ transcompiler]

		Webpack, grunt, gulp ==> JavaScript tools -=> helps automate the process of minification; uglyify;
		transpile; liniting; testing; bundle

		var x = 10;

		console.log(x);

		---------

		var x=10;console.log(x);

		---------

		var personData = {...};
		var_p ={...};



		bundle.js ==> <script src="bundle.js"></script>
-----------------------------------------------------------------------------------
	Project depenedecny config / scripts / Descriptor file: package.json
----------------------------------------------------------------------------------------------

React.js
--------

JavaScript library for building UI components on client side;

React 										Vs 							Angular
Just a View component 													complete MVC [ Model View Controller]
No Dependency Injection library 										comes with DI container
one way binding 														two-way binding
uses virtual dom 														actual dom

------------------------------------------------------------------------------------------

let Welcome = React.createElement("h1",{"style":{"color":"red"}}, "Welcome to React Training");

ReactDOM.render(Welcome, document.getElementById("app"))


<div id="app">
	<h1 style="color:red">
		Welcom to React Training!!
	</h1>
</div>

===========

// functional components
// returns JSX
function Person() {
  return <div className="person">
           <h1>Banuprakash</h1>
          <h3>banu@lucidatechnologies.com</h3>
    </div>
}

ReactDOM.render(<Person />, document.getElementById("app"))

===========


.person {
  width: 500px;
  border : 1px solid red;
}

// functional components
// returns JSX
//Props
// {} interpolataion ==> one way binding ==> data to presentation

function Person(props) {
  return <div className="person">
           <h1>{props.name}</h1>
          <h3>{props.email}</h3>
    </div>
}

ReactDOM.render(<Person name="Banu" email="banu@lucidatechnologies.com"/>, document.getElementById("app"))

=====================

// class components
class Person extends React.Component {
  render() {
    return <div className="person">
         <h1>{this.props.name}</h1>
          <h3>{this.props.email}</h3>
    </div>
  }
}

ReactDOM.render(<Person name="Banu" email="banu@lucidatechnologies.com"/>, document.getElementById("app"));

=======================================

state:
	Objects will have state and behavior
	Banking Account ==> balance is a state;
	balance gets changed by behaviour: deposit; withdraw

	Button ==> color, size, caption ==> state
	onClick, onmousedown, onHover ==> behaiour


=================

npx create-react-app customerapp

open customerapp folder in VSC.

====================

functional components can't have state [ should use React hooks]
 Asynchronous way of updating the state:
Merge update:
 this.setState({
            "customers": custs
 })


==========

	state = {
		"name": "Peter",
		"age" : 25
	}

	...

	this.setState({
		"age": 33
	}, () => console.log("done"))


	 state.name ==> "Peter"
	 state.age ==> 33

============================
props is used to pass functions and values to child
=========================================================



npx create-react-app phoneapp

============================================

testing react application:
	1) BDD ==> unit testing react components
		unit testing frameworks: Jest, Jasmine, Mocha

		React-testing-library provided by create-react-app comes with testing library on top of JEST

	2) cypress/ selenium for e2e testing


JavaScript testing: AAA ==> Assemble
	"describe" ==> test suite or one file is one test suite
	"it/test" ==> each test unit ==> where you perform action and assert

	describe("app tests", () => {

		it("first test", () => {

		})

		it("second test", () => {

		})

		test("third test", () => {

		})
	})

============

Testing frameworks: runs files which has "****.test.js" or "*****.spec.js" or "files within test folder"

npm i cypress @cypress/code-coverage @cypress/instrument-cra

=======================================

React Context ==> introduced in react 16 version
==> Context lets you “broadcast”  data, and changes to it, to all components below.

=============

 let PersonContext = React.createContext();

	class PersonProvider extends React.Component {
		 
    componentDidMount() {
      this.setState({
				"name" : "Arya",
				"email" : "someemail",
				"updateEmail" : this.updateEmail.bind(this)
			});
    }

		updateEmail(email) {
			this.setState({
				"email": email
			});
		}

		render() {
			return <PersonContext.Provider value={{...this.state}}>
					{this.props.children}
			</PersonContext.Provider>
		}
	}


	class App extends React.Component {
		render() {
			return <PersonProvider>
				<First />
				</PersonProvider>
		}
	}

	function First() {
		return <> <h1> I am First !!! <Second /> </h1> </>
	}


	class Second extends React.Component {
		render() {
			return <PersonContext.Consumer>
				{
					value => {
						return <>
							Name : {value.name} <br />
							Email : {value.email} <br />
							<button onClick={()=> value.updateEmail("me@gmail.com")} type="button"> Change </button>

						</>
					}
				}

			</PersonContext.Consumer>
		}
	};

ReactDOM.render(<App/>, document.getElementById("app"));

============================

let p = {
	"name" : "Tim",
	update : function (data) {
		this.name = data;
	}
}

p.update("Raj");
console.log(p);

let n = p.name; // Raj
// let fn = p.update; ==> Context is lost [ doesn't kno "this" reference to which it belongs it]
let fn = p.update.bind(p);	

fn("Geetha");


===============================
  	<link href="https://fonts.googleapis.com/css?family=Oswald|Permanent+Marker&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
	
Router, Context , bootstrap

