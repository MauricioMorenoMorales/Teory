#Function que hace un mapeo y un flitro dentro de una palabra
defmodule Username do
  @spec sanitize(username :: charlist()) :: charlist()
  def sanitize([]), do: []
  def sanitize([head | tail]) do
    case head do
      head when head in ?a..?z -> [head|sanitize(tail)]
      ?_ -> [head|sanitize(tail)]
      ?ü -> [?u,?e|sanitize(tail)]
      ?ö -> [?o,?e|sanitize(tail)]
      ?ä -> [?a,?e|sanitize(tail)]
      ?ß -> [?s,?s|sanitize(tail)]
      _ -> sanitize(tail)
    end
  end
end


defmodule LanguageList2 do
  def new, do: []

  def add(list, language), do: [language | list]

  def remove([_ | tail]), do: tail

  def first([head | _]), do: head

  def count([]), do: 0
  def count([_h | t]), do: 1 + count(t)

  def exciting_list?(list), do: "Elixir" in list
end


defmodule BirdCount2 do
  @spec today(maybe_improper_list) :: any
  def today([]), do: nil
  def today([head | _tail]), do: head

  @spec increment_day_count(maybe_improper_list) :: nonempty_maybe_improper_list
  def increment_day_count([]), do: [1]
  def increment_day_count([head | tail]), do: [head + 1 | tail]

  @spec has_day_without_birds?(maybe_improper_list) :: boolean
  def has_day_without_birds?([]), do: false
  def has_day_without_birds?([0 | _]), do: true
  def has_day_without_birds?([_ | tail]), do: has_day_without_birds? tail

  @spec total([number]) :: number
  def total([]), do: 0
  def total([head | tail]), do: head + total tail

  @spec busy_days(list) :: non_neg_integer
  def busy_days([]), do: 0
  def busy_days([head | tail]) when head >= 5, do: 1 + busy_days tail
  def busy_days([_head | tail]), do: busy_days tail
end
