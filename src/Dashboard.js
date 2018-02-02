import React from 'react';

export default function Dashboard(props) {
  render() {
    return (
      <div>
        <section className="adoptable-cat">
            <header>
              <h1>Fluffy</h1>
              <img src="https://assets3.thrillist.com/v1/image/2622128/size/tmg-slideshow_l.jpg" />
            </header>
            <main>
              <dl>
              <dt>Sex</dt>
              <dd>Female</dd>
              <dt>Age</dt>
              <dd>2</dd>
              <dt>Breed</dt>
              <dd>Bengal</dd>
              <dt>Story</dt>
              <dd>Thrown on the street</dd>
              </dl>
              <button>
                Adopt!
              </button>
            </main>
        </section>

        <section className="adoptable-dog">
            <header>
              <h1>Zeus</h1>
              <img src="http://www.dogster.com/wp-content/uploads/2015/05/Cute%20dog%20listening%20to%20music%201_1.jpg" />
            </header>
            <main>
              <dl>
              <dt>Sex</dt>
              <dd>Male</dd>
              <dt>Age</dt>
              <dd>3</dd>
              <dt>Breed</dt>
              <dd>Golden Retriever</dd>
              <dt>Story</dt>
              <dd>Owner passed away</dd>
              </dl>
              <button>
                Adopt!
              </button>
            </main>
        </section>
      </div>
    )
  }
}