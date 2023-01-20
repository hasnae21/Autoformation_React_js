<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel / React</title>
    <!-- Fonts -->
    <link href="https://fonts.bunny.net/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Styles -->
    <style>
        body {
            font-family: 'Nunito', sans-serif;
        }
    </style>
</head>
{{ $data }}
<br>

<body class="antialiased">

    {{-- @foreach ($data as $item)
        Stgiaire d'id: {{ $item->id }}
        <p>
            Nom and Prenom :
            {{ $item->nom }}{{ $item->prenom }}
        </p>
        <br>
    @endforeach --}}

</body>

</html>
