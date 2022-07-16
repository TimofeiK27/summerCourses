const CODING = `<a href="/classes#coding"><div class="classtimeentry compsci">
                    <span><strong>Coding:</strong></span><br>
                    <span>12:00 PM — 1:20 PM</span>
                </div></a>`;
const FILM_MAKING = `<a href="/classes#film-making"><div class="classtimeentry moviemake">
                        <span><strong>Movie Making:</strong></span><br>
                        <span>1:30 PM — 2:50 PM</span>
                     </div></a>`;
const ART = `<a href="/classes#art"><div class="classtimeentry drawing">
                 <span><strong>Drawing/Cartooning:</strong></span><br>
                 <span>3:00 PM — 4:20 PM</span>
             </div></a>`;

class Calendar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <table class="calendar">
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <p class="classdate">July <strong>18<sup>th</sup></strong></p>
                            ${CODING}
                            ${FILM_MAKING}
                            ${ART}
                        </td>
                        <td>
                            <p class="classdate">July <strong>19<sup>th</sup></strong></p>
                        </td>
                        <td>
                            <p class="classdate">July <strong>20<sup>th</sup></strong><p>
                            ${CODING}
                            ${FILM_MAKING}
                            ${ART}
                        </td>
                        <td>
                            <p class="classdate">July <strong>21<sup>st</sup></strong></p>
                        </td>
                        <td>
                            <p class="classdate">July <strong>22<sup>nd</sup></strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="classdate">July <strong>25<sup>th</sup></strong></p>
                            ${CODING}
                            ${FILM_MAKING}
                            ${ART}
                        </td>
                        <td>
                            <p class="classdate">July <strong>26<sup>th</sup></strong></p>
                        </td>
                        <td>
                            <p class="classdate">July <strong>27<sup>th</sup></strong></p>
                            ${CODING}
                            ${FILM_MAKING}
                            ${ART}
                        </td>
                        <td>
                            <p class="classdate">July <strong>28<sup>th</sup></strong></p>
                        </td>
                        <td>
                            <p class="classdate">July <strong>29<sup>th</sup></strong></p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p class="classdate">August <strong>1<sup>st</sup></strong></p>
                            ${CODING}
                            ${FILM_MAKING}
                            ${ART}
                        </td>
                        <td>
                            <p class="classdate">August <strong>2<sup>nd</sup></strong></p>
                        </td>
                        <td>
                            <p class="classdate">August <strong>3<sup>rd</sup></strong></p>
                            ${CODING}
                            ${FILM_MAKING}
                            ${ART}
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        `;
  }
}

customElements.define('schedule-calendar', Calendar);