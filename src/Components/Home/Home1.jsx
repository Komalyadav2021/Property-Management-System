export const Home1 = () => {
  return (
    <div>
      <div class="split right">
        <div id="pages">
          <div id="Setting-Page">
            <h1>About us</h1>
          </div>
          <div id="page2">
            <div className="form">
              <form autocomplete="off" action="/search" method="POST">
                <div className="autocomplete">
                  <input
                    id="myInput"
                    type="text"
                    name="myCountry"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </div>
            <div className="centered">
              <div className="description">
                <p>
                  Welcome to our Property Management Service (PMS) website,
                  where we make renting your dream home a breeze! Our selection
                  of rental properties is second to none, with a wide variety of
                  options to suit every lifestyle and budget. With menues to
                  choose from properties exclusively maintaned by us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
