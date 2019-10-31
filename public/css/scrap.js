<%for(let i = 0; i < remaining.length; i++) {%>
    <h5><a href="show/<%=remaining[i]._id%>"><%=remaining[i].name%></a> needs to be taken when your child is <%=remaining[i].month%> months old.</h5>
    
<%}%>