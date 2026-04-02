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

+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`TString<api_TString_0c7e1952>` ()                                                                                                                                     |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`TString<api_TString_c14a6db7>` (const ByteArray & array)                                                                                                              |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`TString<api_TString_e019f4d5>` (const char * str)                                                                                                                     |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`TString<api_TString_af539ecb>` (const std::string & str)                                                                                                              |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                           | :ref:`TString<api_TString_fe3ca5db>` (int  n, const char  ch)                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`append<api_TString_3d541982>` (const TString & str)                                                                                                                   |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`append<api_TString_06a7b392>` (const char * str)                                                                                                                      |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`append<api_TString_59fa8e31>` (const std::string & str)                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`append<api_TString_19b72854>` (const char  ch, int  n)                                                                                                                |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`arg<api_TString_3f7ce894>` (const TString & arg1) const                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`arg<api_TString_7c1e4569>` (const TString & arg1, const TString & arg2) const                                                                                         |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`arg<api_TString_f276b4a8>` (const TString & arg1, const TString & arg2, const TString & arg3) const                                                                   |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`arg<api_TString_f2ce6480>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4) const                                             |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`arg<api_TString_36794dbc>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5) const                       |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`arg<api_TString_13d6a0c2>` (const TString & arg1, const TString & arg2, const TString & arg3, const TString & arg4, const TString & arg5, const TString & arg6) const |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      char | :ref:`at<api_TString_35d21078>` (int  position) const                                                                                                                       |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      char | :ref:`back<api_TString_3e407fda>` () const                                                                                                                                  |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      void | :ref:`clear<api_TString_6b3cad4f>` ()                                                                                                                                       |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`compare<api_TString_6f54170c>` (const TString & other) const                                                                                                          |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`contains<api_TString_ec08db74>` (const TString & str) const                                                                                                           |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                const char | :ref:`data<api_TString_be432016>` () const                                                                                                                                  |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      char | :ref:`front<api_TString_f40b9dac>` () const                                                                                                                                 |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOf<api_TString_8430dbaf>` (const TString & str) const                                                                                                            |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`indexOf<api_TString_e0693ac5>` (const char  ch) const                                                                                                                 |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`isEmpty<api_TString_485e63f1>` () const                                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`lastIndexOf<api_TString_5b08c21e>` (const TString & str) const                                                                                                        |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`lastIndexOf<api_TString_310462ed>` (const char  ch) const                                                                                                             |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`left<api_TString_046c8351>` (int  n) const                                                                                                                            |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`length<api_TString_f581e7ba>` () const                                                                                                                                |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`mid<api_TString_94c6201b>` (int  position, int  n) const                                                                                                              |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`remove<api_TString_7a9fbe0d>` (const TString & str)                                                                                                                   |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`remove<api_TString_2f8cbd06>` (const char  ch)                                                                                                                        |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`removeFirst<api_TString_62b8dfae>` ()                                                                                                                                 |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`removeLast<api_TString_4ae8726b>` ()                                                                                                                                  |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`replace<api_TString_46c8de7f>` (const TString & before, const TString & after)                                                                                        |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`replace<api_TString_c5e2a0fd>` (const char  before, const char  after)                                                                                                |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`right<api_TString_54ac08fb>` (int  n) const                                                                                                                           |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`simplified<api_TString_02786d3b>` () const                                                                                                                            |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`size<api_TString_ec79fb0a>` () const                                                                                                                                  |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`StringList<api_StringList>` | :ref:`split<api_TString_d72ef13c>` (const TString & sep) const                                                                                                              |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|         :ref:`StringList<api_StringList>` | :ref:`split<api_TString_cf0ea492>` (const char  sep) const                                                                                                                  |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                     float | :ref:`toFloat<api_TString_f2cbe1d7>` () const                                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                       int | :ref:`toInt<api_TString_921e3b04>` () const                                                                                                                                 |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                    size_t | :ref:`toLong<api_TString_9e1fa267>` () const                                                                                                                                |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`toLower<api_TString_48ca2f15>` () const                                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                         const std::string | :ref:`toStdString<api_TString_f2ab794e>` () const                                                                                                                           |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|      :ref:`std::wstring<api_std_wstring>` | :ref:`toStdWString<api_TString_b7409136>` () const                                                                                                                          |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`toUpper<api_TString_81409d65>` () const                                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|  :ref:`std::u32string<api_std_u32string>` | :ref:`toUtf32<api_TString_d350ac4f>` () const                                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`trimmed<api_TString_78afd65b>` () const                                                                                                                               |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`operator!=<api_TString_78e5f60b>` (const TString & other) const                                                                                                       |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`operator+<api_TString_2c38b067>` (char  ch) const                                                                                                                     |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`operator+<api_TString_8acd97b2>` (const TString & other) const                                                                                                        |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`operator+<api_TString_5ab170ec>` (const char * other) const                                                                                                           |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|               :ref:`TString<api_TString>` | :ref:`operator+<api_TString_0c3a28f1>` (const std::string & other) const                                                                                                    |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_b7a1950f>` (const TString & other)                                                                                                             |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_47bf391e>` (const char  ch)                                                                                                                    |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_a6c3541f>` (const char * str)                                                                                                                  |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|             :ref:`TString<api_TString>` & | :ref:`operator+=<api_TString_f7e9ca38>` (const std::string & str)                                                                                                           |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`operator<<api_TString_8591a2de>` (const TString & other) const                                                                                                        |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      bool | :ref:`operator==<api_TString_cfa83016>` (const TString & other) const                                                                                                       |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
|                                      char | :ref:`operator[]<api_TString_41328976>` (int  position)                                                                                                                     |
+-------------------------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+



.. _api_TString_static:

Static Methods
--------------

+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromUtf32<api_TString_1a639ced>` (const std::u32string & in)                  |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWc32<api_TString_95e78d2c>` (uint32_t  unicode)                           |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`fromWString<api_TString_d5c086a7>` (const std::wstring & in)                  |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`join<api_TString_8abec756>` (const StringList & list, const char * separator) |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_90ef5487>` (float  in)                                     |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_18f5679a>` (int  in)                                       |
+------------------------------+-------------------------------------------------------------------------------------+
|  :ref:`TString<api_TString>` | :ref:`number<api_TString_6decf384>` (long long  in)                                 |
+------------------------------+-------------------------------------------------------------------------------------+

.. _api_TString_methods:

Methods Description
-------------------

.. _api_TString_0c7e1952:

**TString::TString** ()

Constructs an empty string.

----

.. _api_TString_c14a6db7:

**TString::TString** (:ref:`ByteArray<api_ByteArray>` & *array*)

Constructs a string from a byte *array*.

----

.. _api_TString_e019f4d5:

**TString::TString** (char * *str*)

Constructs a *str*ing from a C-style null-terminated *str*ing.

----

.. _api_TString_af539ecb:

**TString::TString** (std::string & *str*)

Constructs a *str*ing from a standard *str*ing.

----

.. _api_TString_fe3ca5db:

**TString::TString** (int  *n*, char  *ch*)

Constructs a string of the given *n* size with every *ch*aracter set to *ch*.

----

.. _api_TString_3d541982:

 :ref:`TString<api_TString>` & **TString::append** (:ref:`TString<api_TString>` & *str*)

Appends the *str*ing *str* onto the end of this *str*ing.

----

.. _api_TString_06a7b392:

 :ref:`TString<api_TString>` & **TString::append** (char * *str*)

Appends the *str*ing *str* to this *str*ing. The given const char pointer is converted to Unicode.

----

.. _api_TString_59fa8e31:

 :ref:`TString<api_TString>` & **TString::append** (std::string & *str*)

Appends the standard *str*ing *str* onto the end of this *str*ing.

----

.. _api_TString_19b72854:

 :ref:`TString<api_TString>` & **TString::append** (char  *ch*, int  *n*)

Appends a string of the given *n* size with every *ch*aracter set to *ch*.

----

.. _api_TString_3f7ce894:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*) const

Returns a copy of this string with the lowest-numbered place-marker %1 replaced by string *arg1*.

----

.. _api_TString_7c1e4569:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2 replaced by string *arg1* and *arg2*.

----

.. _api_TString_f276b4a8:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3 replaced by string *arg1*, *arg2* and *arg3*.

----

.. _api_TString_f2ce6480:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4 replaced by string *arg1*, *arg2*, *arg3* and *arg4*.

----

.. _api_TString_36794dbc:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5 replaced by string *arg1*, *arg2*, *arg3*, *arg4* and *arg5*.

----

.. _api_TString_13d6a0c2:

 :ref:`TString<api_TString>`  **TString::arg** (:ref:`TString<api_TString>` & *arg1*, :ref:`TString<api_TString>` & *arg2*, :ref:`TString<api_TString>` & *arg3*, :ref:`TString<api_TString>` & *arg4*, :ref:`TString<api_TString>` & *arg5*, :ref:`TString<api_TString>` & *arg6*) const

Returns a copy of this string with the lowest-numbered place-marker %1, %2, %3, %4, %5, %6 replaced by string *arg1*, *arg2*, *arg3*, *arg4*, *arg5* and *arg6*.

----

.. _api_TString_35d21078:

 char **TString::at** (int  *position*) const

Returns the character at the given index *position* in the string.

----

.. _api_TString_3e407fda:

 char **TString::back** () const

Returns the last character in the string.

----

.. _api_TString_6b3cad4f:

 void **TString::clear** ()

Clears the contents of the string and makes it empty.

----

.. _api_TString_6f54170c:

 int **TString::compare** (:ref:`TString<api_TString>` & *other*) const

Compares this string with *other* string and returns a negative integer if this is less than *other*, a positive integer if it is greater than *other*, and zero if they are equal.

----

.. _api_TString_ec08db74:

 bool **TString::contains** (:ref:`TString<api_TString>` & *str*) const

Returns true if this *str*ing contains an occurrence of the *str*ing *str*; otherwise returns false.

----

.. _api_TString_be432016:

const char **TString::data** () const

Returns a pointer to the data stored in the TString.

----

.. _api_TString_1a639ced:

 :ref:`TString<api_TString>`  **TString::fromUtf32** (:ref:`std::u32string<api_std::u32string>` & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* UTF-32.

----

.. _api_TString_95e78d2c:

 :ref:`TString<api_TString>`  **TString::fromWc32** (uint32_t  *unicode*)

Returns a TString initialized with the first size characters of the Unicode string *unicode* (encoded as UTF-32).

----

.. _api_TString_d5c086a7:

 :ref:`TString<api_TString>`  **TString::fromWString** (:ref:`std::wstring<api_std::wstring>` & *in*)

Returns a copy of the *in* string. The given string is assumed to be encoded *in* utf16 if the size of wchar_t is 2 bytes (e.g. on windows).

----

.. _api_TString_f40b9dac:

 char **TString::front** () const

Returns a reference to the first character in the string.

----

.. _api_TString_8430dbaf:

 int **TString::indexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the first occurrence of the *str*ing *str* in this *str*ing. Returns -1 if *str* is not found.

----

.. _api_TString_e0693ac5:

 int **TString::indexOf** (char  *ch*) const

Returns the index position of the first occurrence of the *ch*aracter *ch* in this string. Returns -1 if *ch* is not found.

----

.. _api_TString_485e63f1:

 bool **TString::isEmpty** () const

Returns true if string is empty; otherwise returns false.

----

.. _api_TString_8abec756:

 :ref:`TString<api_TString>`  **TString::join** (:ref:`StringList<api_StringList>` & *list*, char * *separator*)

Joins all the string *list* strings into a single string with each element separated by the given *separator* (which can be an empty string).

----

.. _api_TString_5b08c21e:

 int **TString::lastIndexOf** (:ref:`TString<api_TString>` & *str*) const

Returns the index position of the last occurrence of the *str*ing *str* in this *str*ing, searching backward from index position from.

----

.. _api_TString_310462ed:

 int **TString::lastIndexOf** (char  *ch*) const

Returns the index position of the last occurrence of the *ch*aracter *ch* in this string, searching backward from index position from.

----

.. _api_TString_046c8351:

 :ref:`TString<api_TString>`  **TString::left** (int  *n*) const

Returns a substring that contains the *n* leftmost characters of this string.

----

.. _api_TString_f581e7ba:

 int **TString::length** () const

Returns the number of characters in this string.

----

.. _api_TString_94c6201b:

 :ref:`TString<api_TString>`  **TString::mid** (int  *position*, int  *n*) const

Returns a string that contains *n* characters of this string, starting at the specified *position* index up to, but *n*ot including.

----

.. _api_TString_90ef5487:

 :ref:`TString<api_TString>`  **TString::number** (float  *in*)

Returns a string representing the floating-point number *in*.

----

.. _api_TString_18f5679a:

 :ref:`TString<api_TString>`  **TString::number** (int  *in*)

Returns a string representing the *in*teger number *in*.

----

.. _api_TString_6decf384:

 :ref:`TString<api_TString>`  **TString::number** (:ref:`long<api_long>`  *in*)

Returns a string representing the long *in*teger number *in*.

----

.. _api_TString_7a9fbe0d:

 :ref:`TString<api_TString>` & **TString::remove** (:ref:`TString<api_TString>` & *str*)

Removes every occurrence of the given *str* *str*ing in this *str*ing, and returns a reference to this *str*ing.

----

.. _api_TString_2f8cbd06:

 :ref:`TString<api_TString>` & **TString::remove** (char  *ch*)

Removes every occurrence of the *ch*aracter *ch* in this string, and returns a reference to this string.

----

.. _api_TString_62b8dfae:

 :ref:`TString<api_TString>` & **TString::removeFirst** ()

Removes the first character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_4ae8726b:

 :ref:`TString<api_TString>` & **TString::removeLast** ()

Removes the last character in this string. If the string is empty, this function does nothing.

----

.. _api_TString_46c8de7f:

 :ref:`TString<api_TString>` & **TString::replace** (:ref:`TString<api_TString>` & *before*, :ref:`TString<api_TString>` & *after*)

Replaces every occurrence of the string *before* with the string *after* and returns a reference to this string.

----

.. _api_TString_c5e2a0fd:

 :ref:`TString<api_TString>` & **TString::replace** (char  *before*, char  *after*)

Replaces every occurrence of the character *before* with the character *after* and returns a reference to this string.

----

.. _api_TString_54ac08fb:

 :ref:`TString<api_TString>`  **TString::right** (int  *n*) const

Returns a substring that contains the *n* rightmost characters of the string.

----

.. _api_TString_02786d3b:

 :ref:`TString<api_TString>`  **TString::simplified** () const

Returns a string that has whitespace removed from the start and the end, and that has each sequence of internal whitespace replaced with a single space.

----

.. _api_TString_ec79fb0a:

 int **TString::size** () const

Returns the number of characters in this string.

----

.. _api_TString_d72ef13c:

 :ref:`StringList<api_StringList>`  **TString::split** (:ref:`TString<api_TString>` & *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_cf0ea492:

 :ref:`StringList<api_StringList>`  **TString::split** (char  *sep*) const

Splits the string into substrings wherever *sep* occurs, and returns the list of those strings.

----

.. _api_TString_f2cbe1d7:

 float **TString::toFloat** () const

Returns the string converted to a float value.

----

.. _api_TString_921e3b04:

 int **TString::toInt** () const

Returns the string converted to an int. Returns 0 if the conversion fails.

----

.. _api_TString_9e1fa267:

 size_t **TString::toLong** () const

Returns the string converted to a long. Returns 0 if the conversion fails.

----

.. _api_TString_48ca2f15:

 :ref:`TString<api_TString>`  **TString::toLower** () const

Returns a lowercase copy of the string.

----

.. _api_TString_f2ab794e:

const std::string **TString::toStdString** () const

Returns a std::string object with the data contained in this TString.

----

.. _api_TString_b7409136:

 :ref:`std::wstring<api_std::wstring>`  **TString::toStdWString** () const

Returns a std::wstring object with the data contained in this TString.

----

.. _api_TString_81409d65:

 :ref:`TString<api_TString>`  **TString::toUpper** () const

Returns an uppercase copy of the string.

----

.. _api_TString_d350ac4f:

 :ref:`std::u32string<api_std::u32string>`  **TString::toUtf32** () const

Returns a std::u32string object with the data contained in this TString.

----

.. _api_TString_78afd65b:

 :ref:`TString<api_TString>`  **TString::trimmed** () const

Returns a string that has whitespace removed from the start and the end. This includes the ASCII characters '\t', '\n', '\v', '\f', '\r', and ' '.

----

.. _api_TString_78e5f60b:

 bool **TString::operator!=** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is NOT equal to *other*; *other*wise returns false.

The comparison is case-sensitive.

----

.. _api_TString_2c38b067:

 :ref:`TString<api_TString>`  **TString::operator+** (char  *ch*) const

Returns a string that is the result of concatenating this string and *ch* *ch*aracter.

----

.. _api_TString_8acd97b2:

 :ref:`TString<api_TString>`  **TString::operator+** (:ref:`TString<api_TString>` & *other*) const

Returns a string that is the result of concatenating this string and *other*.

----

.. _api_TString_5ab170ec:

 :ref:`TString<api_TString>`  **TString::operator+** (char * *other*) const

Returns a string that is the result of concatenating this string and null terminated *other* charcter string.

----

.. _api_TString_0c3a28f1:

 :ref:`TString<api_TString>`  **TString::operator+** (std::string & *other*) const

Returns a string that is the result of concatenating this string and *other* standard string.

----

.. _api_TString_b7a1950f:

 :ref:`TString<api_TString>` & **TString::operator+=** (:ref:`TString<api_TString>` & *other*)

Appends the string *other* onto the end of this string and returns a reference to this string.

----

.. _api_TString_47bf391e:

 :ref:`TString<api_TString>` & **TString::operator+=** (char  *ch*)

Appends the *ch*aracter *ch* to this string.

----

.. _api_TString_a6c3541f:

 :ref:`TString<api_TString>` & **TString::operator+=** (char * *str*)

Appends the *str*ing *str* to this *str*ing. The const char pointer is converted to Unicode using the fromUtf8() function.

----

.. _api_TString_f7e9ca38:

 :ref:`TString<api_TString>` & **TString::operator+=** (std::string & *str*)

Appends the standard *str*ing *str* to this *str*ing.

----

.. _api_TString_8591a2de:

 bool **TString::operator<** (:ref:`TString<api_TString>` & *other*) const

Returns true if this is lexically less than *other*; *other*wise returns false.

----

.. _api_TString_cfa83016:

 bool **TString::operator==** (:ref:`TString<api_TString>` & *other*) const

Returns true if this string is equal to *other*; *other*wise returns false.

The comparison is case-sensitive.

----

.. _api_TString_41328976:

 char **TString::operator[]** (int  *position*)

Returns the character at the specified *position* in the string as a modifiable reference.


