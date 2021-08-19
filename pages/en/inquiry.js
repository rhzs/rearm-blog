
import Layout from "../../components/layouts/main";


const Services = ({ posts, date }) => (
    <Layout>
        <div>
        Inquiry?
        </div>

        <style jsx>{`
        div {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        @media (min-width: 500px) {

            div {
                max-width: 42rem;
                margin: auto;
                padding: 20px 15px;
            }
        }
        `}</style>
    </Layout>
);

export default Services;
