import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';

// const Review = () => {
//   return (
//     <>
 
//       <div class="ag-format-container">
//         <div class="ag-courses_box">
//           <div class="ag-courses_item">
          
//             <a class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>
              

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Home & Office Removals</b>
//                 </h2>
//                 <br />
//                 From one-bed apartments to entire households and offices in
//                 Sydney city, down the street or across the country, our office
//                 movers and house move services are here to make your move a
//                 breeze with loading, unloading, packing and anything else we can
//                 do to help.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Interstate Removals</b>
//                 </h2>
//                 <br />
//                 Interstate moving is no small task, so leave it to our expert
//                 furniture removalists to handle it all for you. We also offer
//                 extra options for your interstate move such as transit
//                 insurance, packing materials for the long-haul as well as the
//                 use of our secure storage facility to cover all bases for an
//                 overall amazing service.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Country Moves</b>
//                 </h2>
//                 <br />
//                 Going a little further afield? Our country moves offers the same
//                 excellent service all over New South Wales, but with additional
//                 planning and logistics to get your cargo from A to B efficiently
//                 and safely. Our guys can also disassemble and reassemble your
//                 cargo as part of our stress free removal services.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a   class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Small Removals</b>
//                 </h2>
//                 <br />
//                 Not every move is an entire household. We can help you with the
//                 transport of small cargo items or even single items if needed.
//                 This service can also include packing supplies, along with
//                 loading and unloading assistance of smaller items if needed.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Fragile Moves</b>
//                 </h2>
//                 <br />
//                 TVs, valuable collectables, musical instruments, artwork and
//                 more – our trusted removalists have the experience and equipment
//                 to move your fragile cargo from door to door, securely packed
//                 and handled with care. Goes well with our transit insurance.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a  class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Last Minute Moves</b>
//                 </h2>
//                 <br />
//                 If you need a moving service quickly due to changed
//                 circumstances, we’ll do everything we can to relocate you on
//                 short notice, any day, any time. Our urgent Sydney removals
//                 package is perfect during a very stressful situation when moving
//                 house.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a  class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Backloading</b>
//                 </h2>
//                 <br />
//                 Save even more on moving costs with our backloading service, a
//                 reliable service that is ideal for those who are looking to save
//                 money but are flexible with the date and arrival time of their
//                 cargo. With this option, you still get access to the best movers
//                 in town but at more affordable rates.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a   class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Packers And Movers</b>
//                 </h2>
//                 <br />
//                 Save your precious time and take full advantage of our premium
//                 packing services. Everything is done safely and efficiently by
//                 professional packers for full protection of your belongings when
//                 moving house. Our experts will quickly pack away and organise
//                 anything you need for your Sydney move.
//               </div>
//             </a>
//           </div>

//           <div class="ag-courses_item">
//             <a class="ag-courses-item_link">
//               <div class="ag-courses-item_bg"></div>

//               <div class="ag-courses-item_title">
//                 <h2>
//                   <b>Removals & Storage</b>
//                 </h2>
//                 <br />
//                 We offer a wide range of secure and affordable storage solutions
//                 to keep your belongings safe while relocating. No lock-in
//                 contracts when using our storage facilities; simply pick up and
//                 drop off your furniture as you please!
//               </div>
//             </a>
//           </div> 
//         </div>
//       </div>
//     </>
//   );
// };

// export default Review;



 
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const customTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 978,
      md: 1024,
    },
  },
});

export default function RowAndColumnSpacing() {
  return (
    <div className='container' style={{marginTop:"20px"}}>
    <ThemeProvider theme={customTheme}>
    
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Removals & Storage</b>
                </h2>
                <br />
                We offer a wide range of secure and affordable storage solutions
                to keep your belongings safe while relocating. No lock-in
                contracts when using our storage facilities; simply pick up and
                drop off your furniture as you please!
              </div>
            </a>
          </div> 
        </Grid>
        <Grid sm={6} md={4} xs={12}>
                  <div class="ag-courses_item">
            <a class="ag-courses-item_link">
               <div class="ag-courses-item_bg"></div>

               <div class="ag-courses-item_title">
                 <h2>
                   <b>Interstate Removals</b>
                 </h2>
                 <br />
                 Interstate moving is no small task, so leave it to our expert
                 furniture removalists to handle it all for you. We also offer
                 extra options for your interstate move such as transit
                 insurance.
               </div>
             </a>
          </div>
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Country Moves</b>
                </h2>
                <br />
                Going a little further afield? Our country moves offers the same
                excellent service all over New South Wales, but with additional
                planning and logistics to get your cargo from A to B efficiently
                and safely. Our guys can also disassemble and reassemble your
                cargo as part of our stress free removal services.
              </div>
            </a>
          </div> 
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a   class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Small Removals</b>
                </h2>
                <br />
                Not every move is an entire household. We can help you with the
                transport of small cargo items or even single items if needed.
                This service can also include packing supplies, along with
                loading and unloading assistance of smaller items if needed.
              </div>
            </a>
          </div>
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Fragile Moves</b>
                </h2>
                <br />
                TVs, valuable collectables, musical instruments, artwork and
                more – our trusted removalists have the experience and equipment
                to move your fragile cargo from door to door, securely packed
                and handled with care. Goes well with our transit insurance.
              </div>
            </a>
          </div>
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a  class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Last Minute Moves</b>
                </h2>
                <br />
                If you need a moving service quickly due to changed
                circumstances, we’ll do everything we can to relocate you on
                short notice, any day, any time. Our urgent Sydney removals
                package is perfect during a very stressful situation when moving
                house.
              </div>
            </a>
          </div>
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a  class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Backloading</b>
                </h2>
                <br />
                Save even more on moving costs with our backloading service, a
                reliable service that is ideal for those who are looking to save
                money but are flexible with the date and arrival time of their
                cargo. With this option, you still get access to the best movers
                in town but at more affordable rates.
              </div>
            </a>
          </div>
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a   class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Packers And Movers</b>
                </h2>
                <br />
                Save your precious time and take full advantage of our premium
                packing services. Everything is done safely and efficiently by
                professional packers for full protection of your belongings when
                moving house. Our experts will quickly pack away and organise
                anything you need for your Sydney move.
              </div>
            </a>
          </div>
        </Grid>
        <Grid sm={6} md={4} xs={12}>
        <div class="ag-courses_item">
            <a class="ag-courses-item_link">
              <div class="ag-courses-item_bg"></div>

              <div class="ag-courses-item_title">
                <h2>
                  <b>Removals & Storage</b>
                </h2>
                <br />
                We offer a wide range of secure and affordable storage solutions
                to keep your belongings safe while relocating. No lock-in
                contracts when using our storage facilities; simply pick up and
                drop off your furniture as you please!
              </div>
            </a>
          </div> 
        </Grid>
      </Grid>
    </Box>
    </ThemeProvider>
    </div>
  );
};

