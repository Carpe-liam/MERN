import React from 'react'

const Thing = () => {
    return (
        <div class="">
            <h1 class="p-10">Testing</h1>


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



        </div>

        
    )
}

export default Thing
