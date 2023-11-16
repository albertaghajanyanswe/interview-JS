// Поиск в ширину в графе (Breadth First Search)

// Граф - это некая абстрактная структура данных, предствляющая собой множество
// вершин и набор ребер(т.е соединений между парами вершин).
// Ребра бывают однонаправленными и двунаправленными, то есть если из "A" можно попасть только в "B" - это однонаправленность.
// А если можно из "A" в "B" и из "B" в "A" - - это двунаправленность.

const graph = {};
graph.a = ["b", "c"];
graph.b = ["f"];
graph.c = ["d", "e"];
graph.d = ["f"];
graph.e = ["f"];
graph.f = ["g"];

// Задача: Найти существует ли путь из точки "A" в точку "G" за минималльное кол-во шагов.

function breadthSearch(graph, start, end) {

  let queue = [];
  queue.push(start);
  while (queue.length > 0) {
    const current = queue.shift();
    if (!graph[current]) {
      graph[current] = [];
    }
    if (graph[current].includes(end)) {
      return true;
    } else {
      queue = [...queue, ...graph[current]];
    }
  }
  return false;
}

console.log(breadthSearch(graph, "a", "e"));