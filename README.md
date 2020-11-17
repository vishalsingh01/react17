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


