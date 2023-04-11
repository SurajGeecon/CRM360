import Layout from '@/common/layouts/layout'
import React, { ReactElement } from 'react'

const about = () => {
    return (
        <div>about</div>
    )
}

about.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}

export default about