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
|                                | :ref:`TString<api_TString_0d5f7692>` ()                                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_fc71a628>` (const ByteArray & array)                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_65ed7293>` (const char * str)                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_e9d873fc>` (const std::string & str)                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                | :ref:`TString<api_TString_a9b170f3>` (int  n, const char  ch)                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_561d273f>` (const TString & str)                                                                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_fa78b06d>` (const char * str)                                                                                                                      |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_2a3914f0>` (const std::string & str)                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`append<api_TString_5649c8d3>` (const char  ch, int  n)                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_03a852e6>` (const TString & arg1) const                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_56eb127c>` (const TString & arg1, const TString & arg2) const                                                                                         |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_391d64ba>` (const TString & arg1, const TString & arg2, const TString & arg3) const                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_a84cf2de>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4) const                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_6bedf58a>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5) const                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`arg<api_TString_6954bef8>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5, const TString & arg6) const |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`at<api_TString_fd4293cb>` (int  position) const                                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`back<api_TString_e627c95b>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`clear<api_TString_de1f5326>` ()                                                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`compare<api_TString_9db457c3>` (const TString & other) const                                                                                                          |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`contains<api_TString_f24675e1>` (const TString & str) const                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     const char | :ref:`data<api_TString_7d41ac25>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`front<api_TString_cf507d8b>` () const                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`indexOf<api_TString_926ef018>` (const TString & str) const                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`indexOf<api_TString_9b2a3dec>` (const char  ch) const                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`isEmpty<api_TString_fac1078e>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`lastIndexOf<api_TString_f3db071c>` (const TString & str) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`lastIndexOf<api_TString_ef058da4>` (const char  ch) const                                                                                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`left<api_TString_75a0c638>` (int  n) const                                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`length<api_TString_5bf6c1ad>` () const                                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`mid<api_TString_7db98461>` (int  position, int  n) const                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`remove<api_TString_d3b0ec61>` (const TString & str)                                                                                                                   |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`remove<api_TString_ba18d294>` (const char  ch)                                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`removeFirst<api_TString_c83976df>` ()                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`removeLast<api_TString_6f89c5a0>` ()                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`replace<api_TString_0c598734>` (const TString & before, const TString & after)                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`replace<api_TString_034cdfea>` (const char  before, const char  after)                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`right<api_TString_a6fe5c14>` (int  n) const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`simplified<api_TString_fa517b9c>` () const                                                                                                                            |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`size<api_TString_e4205afd>` () const                                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     StringList | :ref:`split<api_TString_238af5d4>` (const TString & sep) const                                                                                                              |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                     StringList | :ref:`split<api_TString_e79db84f>` (const char  sep) const                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                          float | :ref:`toFloat<api_TString_3b15f280>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`toInt<api_TString_403f915e>` () const                                                                                                                                 |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                         size_t | :ref:`toLong<api_TString_ba061c98>` () const                                                                                                                                |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`toLower<api_TString_38c24ab5>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|              const std::string | :ref:`toStdString<api_TString_e3561f48>` () const                                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                   std::wstring | :ref:`toStdWString<api_TString_45d7cf68>` () const                                                                                                                          |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`toUpper<api_TString_ec7f3259>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                 std::u32string | :ref:`toUtf32<api_TString_f42eb07a>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`trimmed<api_TString_c0487d9b>` () const                                                                                                                               |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator!=<api_TString_f05cd4a7>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_54790b26>` (char  ch) const                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_2e18dc59>` (const TString & other) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_f647b03e>` (const char * other) const                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|    :ref:`TString<api_TString>` | :ref:`operator+<api_TString_9641f72a>` (const std::string & other) const                                                                                                    |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_ba60ce15>` (const TString & other)                                                                                                             |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_f419bc03>` (const char  ch)                                                                                                                    |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_a05c8fb9>` (const char * str)                                                                                                                  |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_08579ba4>` (const std::string & str)                                                                                                           |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator<<api_TString_5f43ac1d>` (const TString & other) const                                                                                                        |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           bool | :ref:`operator==<api_TString_6370b95f>` (const TString & other) const                                                                                                       |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                           char | :ref:`operator[]<api_TString_c2a40918>` (int  position)                                                                                                                     |
+--------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_TString_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromUtf32<api_TString_30425967>` (const std::u32string & in)                  |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWc32<api_TString_ab7f891e>` (uint32_t  unicode)                           |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWString<api_TString_91b6c7e0>` (const std::wstring & in)                  |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`join<api_TString_46053fca>` (const StringList & list, const char * separator) |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_b0436ea8>` (float  in)                                     |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_8fc647d1>` (int  in)                                       |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_406ace3d>` (long long  in)                                 |
+------------------------------+-------------------------------------------------------------------------------------+

.. _api_TString_methods:

Methods Description
-------------------

.. _api_TString_0d5f7692:

**TString::TString** ()

Constructs an empty string.

----

.. _api_TString_fc71a628:

**TString::TString** (ByteArray & *array*)

Constructs a string from a byte array.

----

.. _api_TString_65ed7293:

**TString::TString** (char * *str*)

Constructs a string from a C-style null-terminated string.

----

.. _api_TString_e9d873fc:

**TString::TString** (std::string & *str*)

Constructs a string from a standard string.

----

.. _api_TString_a9b170f3:

**TString::TString** (int  *n*, char  *ch*)

Constructs a string of the given *n* size with every character set to ch.

----

.. _api_TString_561d273f:

 :ref:`TString<api_TString>` & **TString::append** (:ref:`TString<api_TString>` & *str*)

Appends the string *str* onto the end of this string.

----

.. _api_TString_fa78b06d:

 :ref:`TString<api_TString>` & **TString::append** (char * *str*)

Appends the string *str* to this string. The given const char pointer is converted to Unicode.

----

.. _api_TString_2a3914f0:

 :ref:`TString<api_TString>` & **TString::append** (std::string & *str*)

Appends the standard string *str* onto the end of this string.

----

.. _api_TString_5649c8d3:

 :ref:`TString<api_TString>` & **TString::append** (char  *ch*, int  *n*)

Appends a string of the given *n* size with every character set to ch.

----

.. _api_TString_03a852e6:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*) const

Returns a copy of this string with the lowest-numbered place-marker %1 replaced by string arg1.

----

.. _api_TString_56eb127c:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2 replaced by string *arg1* and arg2.

----

.. _api_TString_391d64ba:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3 replaced by string arg1, *arg2* and arg3.

----

.. _api_TString_a84cf2de:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4 replaced by string arg1, arg2, *arg3* and arg4.

----

.. _api_TString_6bedf58a:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5 replaced by string arg1, arg2, arg3, *arg4* and arg5.

----

.. _api_TString_6954bef8:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*, :ref:`TString<api_TString>` & *arg6*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5, %6 replaced by string arg1, arg2, arg3, arg4, *arg5* and arg6.

----

.. _api_TString_fd4293cb:

 char **TString::at** (int  *position*) const

Returns the character at the given index *position* in the string.

----

.. _api_TString_e627c95b:

 char **TString::back** () const

Returns the last character in the string.

----

.. _api_TString_de1f5326:

 void **TString::clear** ()

Clears the contents of the string and makes it empty.

----

.. _api_TString_9db457c3:

 int **TString::compare** (:ref:`TString<api_TString>` & *other*) const

Compares this string with *other* string and returns a negative integer if this is less than other, a positive integer if it is greater than other, and zero if they are equal.

----

.. _api_TString_f24675e1:

 bool **TString::contains** (:ref:`TString<api_TString>` & *str*) const

Returns true if this string contains an occurrence of the string str; otherwise returns false.

----

.. _api_TString_7d41ac25:

const char **TString::data** () const

Returns a pointer to the data stored in the TString.

----

.. _api_TString_30425967:

 :ref:`TString<api_TString>`  **TString::fromUtf32** (std::u32string & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* UTF-32.

----

.. _api_TString_ab7f891e:

 :ref:`TString<api_TString>`  **TString::fromWc32** (uint32_t  *unicode*)

Returns a TString initialized with the first size characters of the Unicode string *unicode* (encoded as UTF-32).

----

.. _api_TString_91b6c7e0:

 :ref:`TString<api_TString>`  **TString::fromWString** (std::wstring & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* utf16 if the size of wchar_t is 2 bytes (e.g. on windows).

----

.. _api_TString_cf507d8b:

 char **TString::front** () const

Returns a reference to the first character in the string.

----

.. _api_TString_926ef018:

 int **TString::indexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the first occurrence of the string *str* in this string. Returns -1 if *str* is not found.

----

.. _api_TString_9b2a3dec:

 int **TString::indexOf** (char  *ch*) const

Returns the index position of the first occurrence of the character *ch* in this string. Returns -1 if *ch* is not found.

----

.. _api_TString_fac1078e:

 bool **TString::isEmpty** () const

Returns true if string is empty; otherwise returns false.

----

.. _api_TString_46053fca:

 :ref:`TString<api_TString>`  **TString::join** (StringList & *list*, char * *separator*)

Joins all the string *list* strings into a single string with each element separated by the given *separator* (which can be an empty string).

----

.. _api_TString_f3db071c:

 int **TString::lastIndexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the last occurrence of the string *str* in this string, searching backward from index position from.

----

.. _api_TString_ef058da4:

 int **TString::lastIndexOf** (char  *ch*) const

Returns the index position of the last occurrence of the character *ch* in this string, searching backward from index position from.

----

.. _api_TString_75a0c638:

 :ref:`TString<api_TString>`  **TString::left** (int  *n*) const

Returns a substring that contains the *n* leftmost characters of this string.

----

.. _api_TString_5bf6c1ad:

 int **TString::length** () const

Returns the number of characters in this string.

----

.. _api_TString_7db98461:

 :ref:`TString<api_TString>`  **TString::mid** (int  *position*, int  *n*) const

Returns a string that contains *n* characters of this string, starting at the specified *position* index up to, but not including.

----

.. _api_TString_b0436ea8:

 :ref:`TString<api_TString>`  **TString::number** (float  *in*)

Returns a string representing the floating-point number in.

----

.. _api_TString_8fc647d1:

 :ref:`TString<api_TString>`  **TString::number** (int  *in*)

Returns a string representing the integer number in.

----

.. _api_TString_406ace3d:

 :ref:`TString<api_TString>`  **TString::number** (long  *in*)

Returns a string representing the long integer number in.

----

.. _api_TString_d3b0ec61:

 :ref:`TString<api_TString>` & **TString::remove** (:ref:`TString<api_TString>` & *str*)

Removes every occurrence of the given *str* string in this string, and returns a reference to this string.

----

.. _api_TString_ba18d294:

 :ref:`TString<api_TString>` & **TString::remove** (char  *ch*)

Removes every occurrence of the character *ch* in this string, and returns a reference to this string.

----

.. _api_TString_c83976df:

 :ref:`TString<api_TString>` & **TString::removeFirst** ()

Removes the first character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_6f89c5a0:

 :ref:`TString<api_TString>` & **TString::removeLast** ()

Removes the last character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_0c598734:

 :ref:`TString<api_TString>` & **TString::replace** (:ref:`TString<api_TString>` & *before*, :ref:`TString<api_TString>` & *after*)

Replaces every occurrence of the string *before* with the string *after* and returns a reference to this string.

----

.. _api_TString_034cdfea:

 :ref:`TString<api_TString>` & **TString::replace** (char  *before*, char  *after*)

Replaces every occurrence of the character *before* with the character *after* and returns a reference to this string.

----

.. _api_TString_a6fe5c14:

 :ref:`TString<api_TString>`  **TString::right** (int  *n*) const

Returns a substring that contains the *n* rightmost characters of the string.

----

.. _api_TString_fa517b9c:

 :ref:`TString<api_TString>`  **TString::simplified** () const

Returns a string that has whitespace removed from the start and the end, and that has each sequence of internal whitespace replaced with a single space.

----

.. _api_TString_e4205afd:

 int **TString::size** () const

Returns the number of characters in this string.

----

.. _api_TString_238af5d4:

 StringList **TString::split** (:ref:`TString<api_TString>` & *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_e79db84f:

 StringList **TString::split** (char  *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_3b15f280:

 float **TString::toFloat** () const

Returns the string converted to a float value.

----

.. _api_TString_403f915e:

 int **TString::toInt** () const

Returns the string converted to an int. Returns 0 if the conversion fails.

----

.. _api_TString_ba061c98:

 size_t **TString::toLong** () const

Returns the string converted to a long. Returns 0 if the conversion fails.

----

.. _api_TString_38c24ab5:

 :ref:`TString<api_TString>`  **TString::toLower** () const

Returns a lowercase copy of the string.

----

.. _api_TString_e3561f48:

const std::string **TString::toStdString** () const

Returns a std::string object with the data contained in this TString.

----

.. _api_TString_45d7cf68:

 std::wstring **TString::toStdWString** () const

Returns a std::wstring object with the data contained in this TString.

----

.. _api_TString_ec7f3259:

 :ref:`TString<api_TString>`  **TString::toUpper** () const

Returns an uppercase copy of the string.

----

.. _api_TString_f42eb07a:

 std::u32string **TString::toUtf32** () const

Returns a std::u32string object with the data contained in this TString.

----

.. _api_TString_c0487d9b:

 :ref:`TString<api_TString>`  **TString::trimmed** () const

Returns a string that has whitespace removed from the start and the end. This includes the ASCII characters '\t', '\n', '\v', '\f', '\r', and ' '.

----

.. _api_TString_f05cd4a7:

 bool **TString::operator!=** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is NOT equal to other; otherwise returns false.

The comparison is case-sensitive.

----

.. _api_TString_54790b26:

 :ref:`TString<api_TString>`  **TString::operator+** (char  *ch*) const

Returns a string that is the result of concatenating this string and *ch* character.

----

.. _api_TString_2e18dc59:

 :ref:`TString<api_TString>`  **TString::operator+** (:ref:`TString<api_TString>` & *other*) const

Returns a string that is the result of concatenating this string and other.

----

.. _api_TString_f647b03e:

 :ref:`TString<api_TString>`  **TString::operator+** (char * *other*) const

Returns a string that is the result of concatenating this string and null terminated *other* charcter string.

----

.. _api_TString_9641f72a:

 :ref:`TString<api_TString>`  **TString::operator+** (std::string & *other*) const

Returns a string that is the result of concatenating this string and *other* standard string.

----

.. _api_TString_ba60ce15:

 :ref:`TString<api_TString>` & **TString::operator+=** (:ref:`TString<api_TString>` & *other*)

Appends the string *other* onto the end of this string and returns a reference to this string.

----

.. _api_TString_f419bc03:

 :ref:`TString<api_TString>` & **TString::operator+=** (char  *ch*)

Appends the character *ch* to this string.

----

.. _api_TString_a05c8fb9:

 :ref:`TString<api_TString>` & **TString::operator+=** (char * *str*)

Appends the string *str* to this string. The const char pointer is converted to Unicode using the fromUtf8() function.

----

.. _api_TString_08579ba4:

 :ref:`TString<api_TString>` & **TString::operator+=** (std::string & *str*)

Appends the standard string *str* to this string.

----

.. _api_TString_5f43ac1d:

 bool **TString::operator<** (:ref:`TString<api_TString>` & *other*) const

Returns true if this is lexically less than other; otherwise returns false.

----

.. _api_TString_6370b95f:

 bool **TString::operator==** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is equal to other; otherwise returns false.

The comparison is case-sensitive.

----

.. _api_TString_c2a40918:

 char **TString::operator[]** (int  *position*)

Returns the character at the specified *position* in the string as a modifiable reference.


