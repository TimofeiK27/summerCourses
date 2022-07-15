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
                            <span class="dateofclass">July <strong>18<sup>th</sup></strong></span>
                            <div class="classtimeentry compsci">
                                <span><strong>Computer Science:</strong></span><br>
                                <span>12:00 PM — 1:20 PM</span>
                            </div>
                            <div class="classtimeentry moviemake">
                                <span><strong>Movie Making:</strong></span><br>
                                <span>1:30 PM — 2:50 PM</span>
                            </div>
                            <div class="classtimeentry drawing">
                                <span><strong>Drawing/Cartooning:</strong></span><br>
                                <span>3:00 PM — 4:20 PM</span>
                            </div>
                        </td>
                        <td>
                            July <strong>19<sup>th</sup></strong>
                        </td>
                        <td>
                            July <strong>20<sup>th</sup></strong>
                            <div class="classtimeentry compsci">
                                <span><strong>Computer Science:</strong></span><br>
                                <span>12:00 PM — 1:20 PM</span>
                            </div>
                            <div class="classtimeentry moviemake">
                                <span><strong>Movie Making:</strong></span><br>
                                <span>1:30 PM — 2:50 PM</span>
                            </div>
                            <div class="classtimeentry drawing">
                                <span><strong>Drawing/Cartooning:</strong></span><br>
                                <span>3:00 PM — 4:20 PM</span>
                            </div>
                        </td>
                        <td>
                            July <strong>21<sup>st</sup></strong>
                        </td>
                        <td>
                            July <strong>22<sup>nd</sup></strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="dateofclass">July <strong>25<sup>th</sup></strong></span>
                            <div class="classtimeentry compsci">
                                <span><strong>Computer Science:</strong></span><br>
                                <span>12:00 PM — 1:20 PM</span>
                            </div>
                            <div class="classtimeentry moviemake">
                                <span><strong>Movie Making:</strong></span><br>
                                <span>1:30 PM — 2:50 PM</span>
                            </div>
                            <div class="classtimeentry drawing">
                                <span><strong>Drawing/Cartooning:</strong></span><br>
                                <span>3:00 PM — 4:20 PM</span>
                            </div>
                        </td>
                        <td>
                            July <strong>26<sup>th</sup></strong>
                        </td>
                        <td>
                            July <strong>27<sup>th</sup></strong>
                            <div class="classtimeentry compsci">
                                <span><strong>Computer Science:</strong></span><br>
                                <span>12:00 PM — 1:20 PM</span>
                            </div>
                            <div class="classtimeentry moviemake">
                                <span><strong>Movie Making:</strong></span><br>
                                <span>1:30 PM — 2:50 PM</span>
                            </div>
                            <div class="classtimeentry drawing">
                                <span><strong>Drawing/Cartooning:</strong></span><br>
                                <span>3:00 PM — 4:20 PM</span>
                            </div>
                        </td>
                        <td>
                            July <strong>28<sup>th</sup></strong>
                        </td>
                        <td>
                            July <strong>29<sup>th</sup></strong>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span class="dateofclass">August <strong>1<sup>st</sup></strong></span>
                            <div class="classtimeentry compsci">
                                <span><strong>Computer Science:</strong></span><br>
                                <span>12:00 PM — 1:20 PM</span>
                            </div>
                            <div class="classtimeentry moviemake">
                                <span><strong>Movie Making:</strong></span><br>
                                <span>1:30 PM — 2:50 PM</span>
                            </div>
                            <div class="classtimeentry drawing">
                                <span><strong>Drawing/Cartooning:</strong></span><br>
                                <span>3:00 PM — 4:20 PM</span>
                            </div>
                        </td>
                        <td>
                            August <strong>2<sup>nd</sup></strong>
                        </td>
                        <td>
                            August <strong>3<sup>rd</sup></strong>
                            <div class="classtimeentry compsci">
                                <span><strong>Computer Science:</strong></span><br>
                                <span>12:00 PM — 1:20 PM</span>
                            </div>
                            <div class="classtimeentry moviemake">
                                <span><strong>Movie Making:</strong></span><br>
                                <span>1:30 PM — 2:50 PM</span>
                            </div>
                            <div class="classtimeentry drawing">
                                <span><strong>Drawing/Cartooning:</strong></span><br>
                                <span>3:00 PM — 4:20 PM</span>
                            </div>
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