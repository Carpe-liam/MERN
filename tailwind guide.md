## Step 1 ========
	npx create-react-app |> project name here <|
	cd |> project name here <|
	
## Step 2 ========
	npm install -D tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9
	
## Step 3 ========
	npm install @craco/craco
	update 'package.json'
	>>
		 "start": "craco start",
		 "build": "craco build",
		 "test": "craco test",
	
## Step 4 ========
	create 'craco.config.js' in root folder
	copy >> paste: 
	module.exports = {
		style: {
			postcss: {
				plugins: [
				require('tailwindcss'),
				require('autoprefixer'),
				],
			},
		},
	}
	
## Step 5 ========
	npx tailwindcss-cli@latest init >> will create 'tailwind.config.js'
	copy >> paste: 
	module.exports = {
	  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	  darkMode: false, // or 'media' or 'class'
	  theme: {
		extend: {},
	  },
	  variants: {
		extend: {},
	  },
	  plugins: [],
	}
	
## Step 6 ==========
	open './src/index.css' 
	replace file contents with >>
		@tailwind base;
		@tailwind components;
		@tailwind utilities;

## Step 7 =========
	make sure you have >> import './index.css' 
	should be located in src/index.js

## Step 8 =========
	npm install axios
	npm i react-router-dom@5.3


# ALL DONE!


## Bootstrap+Tailwind quick templates: 
- ## Button: 
		className="btn bg-blue-600 hover:bg-blue-800 px-4 text-light mt-2"


- ## Table: 

			<table className="table border-0">
                <thead>
                    <tr className="">
                        <th scope="col">First</th>
                        <th scope="col">Handle</th>
                        <th scope="col">Stack</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-gray-200">
                        <td>Alex</td>
                        <td>@Alex</td>
                        <td>MERN</td>
                    </tr>
                    <tr className="">
                        <td>Sal</td>
                        <td>@Sal</td>
                        <td>MERN</td>
                    </tr>
                    <tr className="bg-gray-200">
                        <td >Soren</td>
                        <td >@Soren</td>
                        <td>MERN</td>
                    </tr>
                    <tr className="">
                        <td >Tristan</td>
                        <td >@Tristan</td>
                        <td>MERN</td>
                    </tr>
                </tbody>
            </table>










