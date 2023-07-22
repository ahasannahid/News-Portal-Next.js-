import { Card, Col, Row } from 'antd';
import Image from 'next/image';
import {
  ArrowRightOutlined, CalendarOutLined, CommentOutLined, ProfileOutLined
} from "@ant-design/icons";

const AllNews = ({ allNews }) => {
  // console.log(allNews)
  const { Meta } = Card;
  return (
    <>
      <h1
        style={{
          textAlign: "center",
          fontSize: "50px",
          margin: "30px 0px"
        }}>
        #TODAYS HIGHLIGHTS
      </h1>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32
        }}
      >
        {
          allNews?.map((news) => {
            <Col key={news.id} className='gutter-row' span={6}>
              <Card
                hoverable
                cover={
                  <Image
                    src={news?.image_url}
                    width={500}
                    height={200}
                    responsive
                    alt="news image"
                  />
                }
              >
                <Meta title={news?.title} />
                <div
                  className="line"
                  style={{
                    height: "5px",
                    margin: "20px 0px",
                    background: "#000",
                    width: "100%"
                  }}
                ></div>

                <p
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    color: "gray",
                    margin: "10px 0px",
                    fontSize: "12px"
                  }}
                >
                  <span>
                    <CalendarOutLined />{news?.release_date}
                  </span>
                  <span>
                    <CommentOutLined />{news?.comment_count}
                  </span>
                  <span>
                    <ProfileOutLined />{news?.category}
                  </span>
                </p>

                <p style={{ fontSize: "15px" }}>
                  {news?.description.length > 100
                    ? news?.description.slice(0, 70) + "...."
                    : news?.description}
                </p>
                <p
                  style={{
                    fontSize: "15px",
                    marginTop: "20px",
                    backgroundColor: "black",
                    width: "100%",
                    padding: "2px 5px",
                    fontWeight: "300",
                    textAlign: "center",
                    letterSpacing: "3px",
                    color: "white"
                  }}
                >
                  keep Reading <ArrowRightOutlined />
                </p>
              </Card>
            </Col>
          })
        }
      </Row>
    </>
  )
};

export default AllNews;