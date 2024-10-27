import React, { useEffect, useState } from 'react';
import Layout from '../Components/Layout/Layout';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';

const Programs = () => {
  const [programsData, setProgramsData] = useState([]);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      const response = await fetch('https://peter-backend.onrender.com/api/programs/allprograms');
      const data = await response.json();
      setProgramsData(data);
    } catch (error) {
      console.error('Error fetching programs:', error);
    }
  };

  return (
    <Layout>
      <div id="wrapper">
        {/* Page Title Section */}
        <section
          style={{
            paddingTop: '150px',
            paddingBottom: '50px',
            background: "#3F497F",
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <MDBContainer>
            <MDBRow>
              <MDBCol md="12">
                <h1 style={{ color: "#F7C04A", fontWeight: "bolder" }}>Programs Offered</h1>
                <p style={{ fontWeight: "bold" }}>
                  At WISE PL, we provide a comprehensive range of educational programs designed to support and enhance students' academic journey.
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        {/* Programs Section */}
        <section style={{ padding: '20px 0', backgroundColor: '#f7f7f7' }}>
          <MDBContainer>
            <MDBRow>
              {programsData.length > 0 ? (
                programsData.map((program, index) => (
                  <MDBCol key={index} md="4">
                    <MDBCard className="m-3">
                      <MDBCardBody>
                        <MDBCardTitle className="text_blue" style={{ fontSize: '19px' }}>{program.title}</MDBCardTitle>
                        <MDBCardText>
                          <ul>
                            <li>{program.description}</li>
                          </ul>
                        </MDBCardText>
                        <p style={{ color: 'black', fontWeight: 'bolder' }}>Price: ${program.price}</p>
                      </MDBCardBody>
                    </MDBCard>
                  </MDBCol>
                ))
              ) : (
                <p>No programs available at the moment.</p>
              )}
            </MDBRow>

            {/* Contact Section */}
            <MDBRow className="mt-5 text-center">
              <MDBCol md="12">
                <h5>For more details or to enroll in our programs, please contact us at:</h5>
                <p style={{ fontWeight: 'bold', color: '#3F497F' }}>CALL NOW: +65-8945 6089 or +65-6272 7061</p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </div>
    </Layout>
  );
};

export default Programs;
