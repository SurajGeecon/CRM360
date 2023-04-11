import Layout from '@/common/layouts/layout'
import React, { ReactElement } from 'react'

const home = () => {
    return (
        <div>
            {/* <h1 className="text-3xl font-bold underline bg-purple-500">
                Hello world!
            </h1> */}
            home page
        </div>
    )
}

home.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default home