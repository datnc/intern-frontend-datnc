import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentList() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('/api/v1/role')
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <div>
            <div className="tbl-list">
                <table className="tbl-list-table">
                    <thead>
                        <tr>
                            <th className="tbl-list-th">Student ID</th>
                            <th className="tbl-list-th">Name</th>
                            <th className="tbl-list-th">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map(post => (
                            <tr className="tbl-list-tr" >
                                <React.Fragment>
                                    <td key={post.id} className="tbl-list-td-id" >{post.id}</td>
                                    <td key={post.id} className="tbl-list-td-name"><a href="student-detail" id={post.id}>{post.role_name}</a></td>
                                    <td className="tbl-list-td-gender">Male</td>
                                </React.Fragment>
                            </tr>
                        ), [])}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
