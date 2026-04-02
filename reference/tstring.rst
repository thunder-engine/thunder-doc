.. _api_TString:

TString
=======

Inherited: None

.. _api_TString_description:

Description
-----------



.. _api_TString_public:

Public Methods
--------------

+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_4b025e96>` ()                                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_1765ab8c>` (const ByteArray & array)                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_ecba6fd9>` (const char * str)                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_914607fb>` (const std::string & str)                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_a416372b>` (int  n, const char  ch)                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_d96340b2>` (const TString & str)                                                                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_b8f0de95>` (const char * str)                                                                                                                      |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_49d8c1b5>` (const std::string & str)                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_f9253e4c>` (const char  ch, int  n)                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_02675e9a>` (const TString & arg1) const                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_7ab5921d>` (const TString & arg1, const TString & arg2) const                                                                                         |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_4f6b9e01>` (const TString & arg1, const TString & arg2, const TString & arg3) const                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_729b3a0e>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4) const                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_43d7c059>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5) const                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_5dfc80b2>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5, const TString & arg6) const |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`at<api_TString_9607fec5>` (int  position) const                                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`back<api_TString_2e507694>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`clear<api_TString_b01fac29>` ()                                                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`compare<api_TString_c9607a13>` (const TString & other) const                                                                                                          |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`contains<api_TString_4e75c286>` (const TString & str) const                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     const char | :ref:`data<api_TString_904cf712>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`front<api_TString_a639c1d0>` () const                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`indexOf<api_TString_52681f3d>` (const TString & str) const                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`indexOf<api_TString_d6be8c73>` (const char  ch) const                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`isEmpty<api_TString_d1e5bfa9>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`lastIndexOf<api_TString_5d074c89>` (const TString & str) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`lastIndexOf<api_TString_a3d6814e>` (const char  ch) const                                                                                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`left<api_TString_402db1ef>` (int  n) const                                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`length<api_TString_39ab24d7>` () const                                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`mid<api_TString_138dc075>` (int  position, int  n) const                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`remove<api_TString_903de462>` (const TString & str)                                                                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`remove<api_TString_036517cb>` (const char  ch)                                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`removeFirst<api_TString_2c6d8e39>` ()                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`removeLast<api_TString_e7398d51>` ()                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`replace<api_TString_310e7846>` (const TString & before, const TString & after)                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`replace<api_TString_a69fc287>` (const char  before, const char  after)                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`right<api_TString_54a90e32>` (int  n) const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`simplified<api_TString_05a8bc49>` () const                                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`size<api_TString_c04e3a18>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     StringList | :ref:`split<api_TString_b570f3d4>` (const TString & sep) const                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     StringList | :ref:`split<api_TString_a067398d>` (const char  sep) const                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                          float | :ref:`toFloat<api_TString_6a7f5432>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`toInt<api_TString_3216d5fc>` () const                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                         size_t | :ref:`toLong<api_TString_980a271d>` () const                                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`toLower<api_TString_61fd3cea>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|              const std::string | :ref:`toStdString<api_TString_2b3817fa>` () const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   std::wstring | :ref:`toStdWString<api_TString_65a4e30f>` () const                                                                                                                          |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`toUpper<api_TString_a35f72e0>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                 std::u32string | :ref:`toUtf32<api_TString_3107428f>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`trimmed<api_TString_e340d6a9>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_TString_235169cb>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_ae9d0421>` (char  ch) const                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_f5834ba2>` (const TString & other) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_7cb2f3a0>` (const char * other) const                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_d4635208>` (const std::string & other) const                                                                                                    |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_469ad3f0>` (const TString & other)                                                                                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_453ac82e>` (const char  ch)                                                                                                                    |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_fe69b45d>` (const char * str)                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_e8d651c7>` (const std::string & str)                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator\<<api_TString_385a671d>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_TString_aec47b62>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`operator[]<api_TString_5bcf4801>` (int  position)                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_TString_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromUtf32<api_TString_f43ba972>` (const std::u32string & in)                  |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWc32<api_TString_f7b6a9d2>` (uint32_t  unicode)                           |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWString<api_TString_90857c1b>` (const std::wstring & in)                  |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`join<api_TString_3b42c591>` (const StringList & list, const char * separator) |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_8763ef41>` (float  in)                                     |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_3f0cd6ae>` (int  in)                                       |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_a390c14f>` (long long  in)                                 |
+------------------------------+-------------------------------------------------------------------------------------+

.. _api_TString_methods:

Methods Description
-------------------

.. _api_TString_4b025e96:

**TString::TString** ()

Constructs an empty string.

----

.. _api_TString_1765ab8c:

**TString::TString** (ByteArray & *array*)

Constructs a string from a byte array.

----

.. _api_TString_ecba6fd9:

**TString::TString** (char * *str*)

Constructs a string from a C-style null-terminated string.

----

.. _api_TString_914607fb:

**TString::TString** (std::string & *str*)

Constructs a string from a standard string.

----

.. _api_TString_a416372b:

**TString::TString** (int  *n*, char  *ch*)

Constructs a string of the given *n* size with every character set to ch.

----

.. _api_TString_d96340b2:

 :ref:`TString<api_TString>` & **TString::append** (:ref:`TString<api_TString>` & *str*)

Appends the string *str* onto the end of this string.

----

.. _api_TString_b8f0de95:

 :ref:`TString<api_TString>` & **TString::append** (char * *str*)

Appends the string *str* to this string. The given const char pointer is converted to Unicode.

----

.. _api_TString_49d8c1b5:

 :ref:`TString<api_TString>` & **TString::append** (std::string & *str*)

Appends the standard string *str* onto the end of this string.

----

.. _api_TString_f9253e4c:

 :ref:`TString<api_TString>` & **TString::append** (char  *ch*, int  *n*)

Appends a string of the given *n* size with every character set to ch.

----

.. _api_TString_02675e9a:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*) const

Returns a copy of this string with the lowest-numbered place-marker %1 replaced by string arg1.

----

.. _api_TString_7ab5921d:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2 replaced by string *arg1* and arg2.

----

.. _api_TString_4f6b9e01:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3 replaced by string arg1, *arg2* and arg3.

----

.. _api_TString_729b3a0e:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4 replaced by string arg1, arg2, *arg3* and arg4.

----

.. _api_TString_43d7c059:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5 replaced by string arg1, arg2, arg3, *arg4* and arg5.

----

.. _api_TString_5dfc80b2:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*, :ref:`TString<api_TString>` & *arg6*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5, %6 replaced by string arg1, arg2, arg3, arg4, *arg5* and arg6.

----

.. _api_TString_9607fec5:

 char **TString::at** (int  *position*) const

Returns the character at the given index *position* in the string.

----

.. _api_TString_2e507694:

 char **TString::back** () const

Returns the last character in the string.

----

.. _api_TString_b01fac29:

 void **TString::clear** ()

Clears the contents of the string and makes it empty.

----

.. _api_TString_c9607a13:

 int **TString::compare** (:ref:`TString<api_TString>` & *other*) const

Compares this string with *other* string and returns a negative integer if this is less than other, a positive integer if it is greater than other, and zero if they are equal.

----

.. _api_TString_4e75c286:

 bool **TString::contains** (:ref:`TString<api_TString>` & *str*) const

Returns true if this string contains an occurrence of the string str; otherwise returns false.

----

.. _api_TString_904cf712:

const char **TString::data** () const

Returns a pointer to the data stored in the TString.

----

.. _api_TString_f43ba972:

 :ref:`TString<api_TString>`  **TString::fromUtf32** (std::u32string & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* UTF-32.

----

.. _api_TString_f7b6a9d2:

 :ref:`TString<api_TString>`  **TString::fromWc32** (uint32_t  *unicode*)

Returns a TString initialized with the first size characters of the Unicode string *unicode* (encoded as UTF-32).

----

.. _api_TString_90857c1b:

 :ref:`TString<api_TString>`  **TString::fromWString** (std::wstring & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* utf16 if the size of wchar_t is 2 bytes (e.g. on windows).

----

.. _api_TString_a639c1d0:

 char **TString::front** () const

Returns a reference to the first character in the string.

----

.. _api_TString_52681f3d:

 int **TString::indexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the first occurrence of the string *str* in this string. Returns -1 if *str* is not found.

----

.. _api_TString_d6be8c73:

 int **TString::indexOf** (char  *ch*) const

Returns the index position of the first occurrence of the character *ch* in this string. Returns -1 if *ch* is not found.

----

.. _api_TString_d1e5bfa9:

 bool **TString::isEmpty** () const

Returns true if string is empty; otherwise returns false.

----

.. _api_TString_3b42c591:

 :ref:`TString<api_TString>`  **TString::join** (StringList & *list*, char * *separator*)

Joins all the string *list* strings into a single string with each element separated by the given *separator* (which can be an empty string).

----

.. _api_TString_5d074c89:

 int **TString::lastIndexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the last occurrence of the string *str* in this string, searching backward from index position from.

----

.. _api_TString_a3d6814e:

 int **TString::lastIndexOf** (char  *ch*) const

Returns the index position of the last occurrence of the character *ch* in this string, searching backward from index position from.

----

.. _api_TString_402db1ef:

 :ref:`TString<api_TString>`  **TString::left** (int  *n*) const

Returns a substring that contains the *n* leftmost characters of this string.

----

.. _api_TString_39ab24d7:

 int **TString::length** () const

Returns the number of characters in this string.

----

.. _api_TString_138dc075:

 :ref:`TString<api_TString>`  **TString::mid** (int  *position*, int  *n*) const

Returns a string that contains *n* characters of this string, starting at the specified *position* index up to, but not including.

----

.. _api_TString_8763ef41:

 :ref:`TString<api_TString>`  **TString::number** (float  *in*)

Returns a string representing the floating-point number in.

----

.. _api_TString_3f0cd6ae:

 :ref:`TString<api_TString>`  **TString::number** (int  *in*)

Returns a string representing the integer number in.

----

.. _api_TString_a390c14f:

 :ref:`TString<api_TString>`  **TString::number** (long  *in*)

Returns a string representing the long integer number in.

----

.. _api_TString_903de462:

 :ref:`TString<api_TString>` & **TString::remove** (:ref:`TString<api_TString>` & *str*)

Removes every occurrence of the given *str* string in this string, and returns a reference to this string.

----

.. _api_TString_036517cb:

 :ref:`TString<api_TString>` & **TString::remove** (char  *ch*)

Removes every occurrence of the character *ch* in this string, and returns a reference to this string.

----

.. _api_TString_2c6d8e39:

 :ref:`TString<api_TString>` & **TString::removeFirst** ()

Removes the first character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_e7398d51:

 :ref:`TString<api_TString>` & **TString::removeLast** ()

Removes the last character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_310e7846:

 :ref:`TString<api_TString>` & **TString::replace** (:ref:`TString<api_TString>` & *before*, :ref:`TString<api_TString>` & *after*)

Replaces every occurrence of the string *before* with the string *after* and returns a reference to this string.

----

.. _api_TString_a69fc287:

 :ref:`TString<api_TString>` & **TString::replace** (char  *before*, char  *after*)

Replaces every occurrence of the character *before* with the character *after* and returns a reference to this string.

----

.. _api_TString_54a90e32:

 :ref:`TString<api_TString>`  **TString::right** (int  *n*) const

Returns a substring that contains the *n* rightmost characters of the string.

----

.. _api_TString_05a8bc49:

 :ref:`TString<api_TString>`  **TString::simplified** () const

Returns a string that has whitespace removed from the start and the end, and that has each sequence of internal whitespace replaced with a single space.

----

.. _api_TString_c04e3a18:

 int **TString::size** () const

Returns the number of characters in this string.

----

.. _api_TString_b570f3d4:

 StringList **TString::split** (:ref:`TString<api_TString>` & *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_a067398d:

 StringList **TString::split** (char  *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_6a7f5432:

 float **TString::toFloat** () const

Returns the string converted to a float value.

----

.. _api_TString_3216d5fc:

 int **TString::toInt** () const

Returns the string converted to an int. Returns 0 if the conversion fails.

----

.. _api_TString_980a271d:

 size_t **TString::toLong** () const

Returns the string converted to a long. Returns 0 if the conversion fails.

----

.. _api_TString_61fd3cea:

 :ref:`TString<api_TString>`  **TString::toLower** () const

Returns a lowercase copy of the string.

----

.. _api_TString_2b3817fa:

const std::string **TString::toStdString** () const

Returns a std::string object with the data contained in this TString.

----

.. _api_TString_65a4e30f:

 std::wstring **TString::toStdWString** () const

Returns a std::wstring object with the data contained in this TString.

----

.. _api_TString_a35f72e0:

 :ref:`TString<api_TString>`  **TString::toUpper** () const

Returns an uppercase copy of the string.

----

.. _api_TString_3107428f:

 std::u32string **TString::toUtf32** () const

Returns a std::u32string object with the data contained in this TString.

----

.. _api_TString_e340d6a9:

 :ref:`TString<api_TString>`  **TString::trimmed** () const

Returns a string that has whitespace removed from the start and the end. This includes the ASCII characters '\t', '\n', '\v', '\f', '\r', and ' '.

----

.. _api_TString_235169cb:

 bool **TString::operator!=** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is NOT equal to other; otherwise returns false.

The comparison is case-sensitive.

----

.. _api_TString_ae9d0421:

 :ref:`TString<api_TString>`  **TString::operator+** (char  *ch*) const

Returns a string that is the result of concatenating this string and *ch* character.

----

.. _api_TString_f5834ba2:

 :ref:`TString<api_TString>`  **TString::operator+** (:ref:`TString<api_TString>` & *other*) const

Returns a string that is the result of concatenating this string and other.

----

.. _api_TString_7cb2f3a0:

 :ref:`TString<api_TString>`  **TString::operator+** (char * *other*) const

Returns a string that is the result of concatenating this string and null terminated *other* charcter string.

----

.. _api_TString_d4635208:

 :ref:`TString<api_TString>`  **TString::operator+** (std::string & *other*) const

Returns a string that is the result of concatenating this string and *other* standard string.

----

.. _api_TString_469ad3f0:

 :ref:`TString<api_TString>` & **TString::operator+=** (:ref:`TString<api_TString>` & *other*)

Appends the string *other* onto the end of this string and returns a reference to this string.

----

.. _api_TString_453ac82e:

 :ref:`TString<api_TString>` & **TString::operator+=** (char  *ch*)

Appends the character *ch* to this string.

----

.. _api_TString_fe69b45d:

 :ref:`TString<api_TString>` & **TString::operator+=** (char * *str*)

Appends the string *str* to this string. The const char pointer is converted to Unicode using the fromUtf8() function.

----

.. _api_TString_e8d651c7:

 :ref:`TString<api_TString>` & **TString::operator+=** (std::string & *str*)

Appends the standard string *str* to this string.

----

.. _api_TString_385a671d:

 bool **TString::operator<** (:ref:`TString<api_TString>` & *other*) const

Returns true if this is lexically less than other; otherwise returns false.

----

.. _api_TString_aec47b62:

 bool **TString::operator==** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is equal to other; otherwise returns false.

The comparison is case-sensitive.

----

.. _api_TString_5bcf4801:

 char **TString::operator[]** (int  *position*)

Returns the character at the specified *position* in the string as a modifiable reference.


