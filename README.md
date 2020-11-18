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
queryByText
queryByRole
queryByLabelText
queryByPlaceholderText
queryByAltText
queryByDisplayValue
queryByTestId
===================

Day 2:
------

	1) React.createElement()
	2) functional component function Product() { return JSX }
	3) class Components: 
	class Product extends React.Component {
		render() {
			return JSX
		}
	}

	4) state and props
	props is a mechanism using which parent passes vairables and function reference to child components

	5) npx create-react-app customerapp
		creates a scaffolding code

	6) 	RTL ==> react Testing library

		Unit testing ==> RTL built on top of JEST, JEST-dom

		getByText
		getByPlaceHolder
		getByRole
		
		<input type="text" /> if within this textbox value ==> typed text is Hello
		getByDisplayValue ==> screen.getByDisplayValue("Hello")

		<div test-id="one"></one>

		getByTestId ==> screen.getByTestId("one")

		<label for="firstName">
			<input type="text" />
		</label>

		getByLabelText ==> screen.getByLabelText("firstName") ; ==> returns the text box which has label "firstName"

		-----

		let {container} = render(<App/>)

		using container i can access any DOM element using core JS functions like
		getElementById, getElementByTagName, querySelector, querySelectorAll

		--------

		all the above methods has getAll versions
		Example: getAllByRole("button")

=======================

	we also have queryBy methods for all the above mentioned methods
	like: queryByText, queryByRole

	difference is queryByXXX returns "null" if not found where as getByXXX throws exception if not found

	let elem = getByText(/Monica/i);

	expect(elem).toBeNull(); // throws exception

	where as 

	let elem = queryByText(/Monica/i);

	expect(elem).toBeNull(); test fails
=========================

findByXXX also available for above options

findByText(/Monica/i) ==> waitFor() method async operatation

Difference is "findBy" should be used for anything which comes eventually [ Promise based API]

====================

React Component Life Cycle:

constructor() ==> render() ==> componentDidMount() will be called
Any interaction to server should be done in componentDidMount()

once componentDidMount() completes ==> shouldComponentUpdate() ==> render() ==> componentDidUpdate()  

========================================================

cypress E2E testing [ like how you see on browser]
npm i cypress @cypress/code-coverage @cypress/instrument-cra

1) start your server
npm start

2)  place cypress.json in application folder

3) npm run cypress

	this creates "cypress" folder and runs around 115 tests of sample "spec" files present in "integration/examples" folder

4) delete generated "spec" files and create our "spec" files in that folder





	 cy.get(".row") ==> document.querySelectorAll(".row")

	  cy.get("input") ==> document.getElementByTagName("input")

==========================================


npx create-react-app phoneapp
npm i bootstrap react-router-dom styled-components


1) bootstrap
	CSS library for creating Responsive Web design
	it uses 12 grid / column system

2) styled-components
	ready made react components wrapper for all DOM elements
	https://styled-components.com/

3) react-router-dom
	
	Single Application applications will have only one html page [ index.html]

	We need to display different views for different URLs

	http://localhost:3000/products

	http://localhost:3000/cart

	http://localhost:3000/orders

	http://localhost:3000/details/iphone12

	Why?
		1) SEO
			search on rakuten locations

			http://rakuten.com/locations

			search iPhone 12

			http://amazon.com/mobiles/iPhone12

		2) Bookmark

		3) History API
			Prev and next browser actions should navigate between views and not pages
===============================================================================================

phoneapp needs the following react components:
1) Navbar
2) ProductList 
3) Product
4) Cart
5) CartList
6) Detail
7) Default
	http://localhost:3000/abc

rcc
import {Link} from 'react-router-dom';

 <Link to="/">
                    <i className="navbar-brand">
                        Rakuten
                    </i>
            </Link>


Click on Rakuten triggers Route / and ProductList component is rendered.

----------------

<a href="/a.html">
	 <i className="navbar-brand">
                        Rakuten
                    </i>
</a>

use "a href" to navigate to different page

===============
FROM "share.zip" file:
copy "data.js" into "src"
copy "Context.js" into "components" folder

==============

Chrome extensions:
	React Developer tools
	Redux DevTools

=======================================


react-router-dom ==> BrowserRouter

 <Router>
      <Navbar />
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/details/:id" component={Details} />
        <Route exact path="/" component={ProductList} />
        <Route default component={Default} />
      </Switch>
    </Router>    

bootstrap, styled-components, fontawesome

===============

Context.js
	 state = {
        products : [],
        cart: [],
        detailProduct: {},
        cartSubTotal : 0,
        cartTax : 0,
        cartTotal : 0
    }

    ProductList ==> Consumer ==> products

    Cart ==> Consumer ==> cart, cartSubtotal, cartTax,

    DetailComponent ==> Consumer ===> detailProduct


  class ProductProvider extends Component {

  	 addToCart  (id)  {
        console.log("add to cart", id);
        let prd = this.getItem(id);
        prd.inCart = true;
        prd.count = 1; // how many items in cart
        prd.total = prd.price;
        let cartCopy =  this.state.cart;
        cartCopy.push(prd);
        this.setState({
            cart: cartCopy
        }, () => this.addTotal())
    }

    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
               
                addToCart: this.addToCart.bind(this),
                 
            }}>
                {this.props.children}                
            </ProductContext.Provider>
        );
    }
}

============

<div className="container">
                <div className="row">
                    
                </div>
 </div>

 "container" bootstrap css gives automatic margin on left and right
 "row" ==> divides the viewport into 12 columns

 ==========

 After Tea break 15 min

 complete + and - operations in cartList

 ===================================================

 data.json 

 npm i -g json-server

 	json-server ==> for RESTful web services

 	this treats a file as restful resource; CRUD operations on this file

 	{
 		"customers" : [],
 		"products" : [],
 		"orders" : []
 	}


 	/customers
 	/products

 ============

 form react to make HTTP requests we can use any of the following libraries: jQuery [Ajax], fetch, axios,...


 axios.get('http://localhost:1234/products')
  .then(
  function (response) {
    // handle success
    console.log(response);
  },
  function( err) {

}).catch(error) {

   }

========
phoneapp:
  1) using React.createContext() ; // central source of truth ==> state and functions placed here any component can subscribe; no need to pass as "props" thro intermediary

  2) react-router-dom
  		SPA ==> different URIs ==> different views
  		BrowserRouter, Route, Switch

  3) axios ==> http calls to get json data from RESTful web service

  4) inspect using Rect Developer tools [ Chrome extension] and debug

==========

React Hooks, Redux, other advance concepts

==================



  
