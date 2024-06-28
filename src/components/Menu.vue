<template>
  <div>
    <nav class="navbar">
        <ul class="nav-list">
            <li><router-link to="/">Todas</router-link></li>
            <li><router-link to="/Pendente">Pendentes</router-link></li>
            <li><router-link to="/Concluida">Concluidas</router-link></li>
        </ul>
        <div class="rightNav">
            <input type="text" name="search" id="search" placeholder="Search">
            <button class="btn btn-sm">Search</button>
        </div>
    </nav>
  </div>
</template>
<script>
export default{
    name:'Menu'
}
</script>

<style>
 body {
            font-family: 'Arial', sans-serif;
        }

        .navbar {
            display: flex;
            position: sticky;
            align-items: center;
            justify-content: space-between;
            top: 0px;
            background-blend-mode: darken;
            background-size: cover;
            color: white;
            padding: 10px 20px;
            background:rgb(80, 67, 44);
        }

        .nav-list {
            display: flex;
            list-style: none;
        }

        .nav-list li {
            margin-right: 20px;
        }

        .nav-list li:last-child {
            margin-right: 0;
        }

        .nav-list li a {
            text-decoration: none;
            color: white;
            font-size: 18px;
            transition: color 0.3s ease-in-out;
        }

        .nav-list li a:hover {
            color: #ffd700;
            /* Change the color on hover */
        }

        .rightNav {
            text-align: right;
        }

        #search {
            padding: 8px;
            font-size: 16px;
            border: 2px solid #fff;
            border-radius: 5px;
        }

        .btn {
            background-color: #ffd700;
            color: #000;
            border: none;
            padding: 8px 12px;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease-in-out;
        }

        .btn:hover {
            background-color: #000;
            /* Change the background color on hover */
            color: #ffd700;
        }
</style>