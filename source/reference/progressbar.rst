.. _api_ProgressBar:

ProgressBar
===========

Inherited: None

.. _api_ProgressBar_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_ProgressBar_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------------+
|    :ref:`Frame<api_Frame>` * | :ref:`chunk<api_ProgressBar_ac17420b>` () const                          |
+------------------------------+--------------------------------------------------------------------------+
|                        float | :ref:`from<api_ProgressBar_d6bcae12>` () const                           |
+------------------------------+--------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`progressColor<api_ProgressBar_972ac856>` () const                  |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setChunk<api_ProgressBar_70f23ad8>` (Frame * frame)                |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setFrom<api_ProgressBar_0c947b13>` (float  value)                  |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setProgressColor<api_ProgressBar_957a4c10>` (const Vector4  color) |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setTo<api_ProgressBar_c4b19e32>` (float  value)                    |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setValue<api_ProgressBar_3c17db46>` (float  value)                 |
+------------------------------+--------------------------------------------------------------------------+
|                        float | :ref:`to<api_ProgressBar_25e180f4>` () const                             |
+------------------------------+--------------------------------------------------------------------------+
|                        float | :ref:`value<api_ProgressBar_68d295f4>` () const                          |
+------------------------------+--------------------------------------------------------------------------+



.. _api_ProgressBar_static:

Static Methods
--------------

None

.. _api_ProgressBar_methods:

Methods Description
-------------------

.. _api_ProgressBar_ac17420b:

 :ref:`Frame<api_Frame>` * **ProgressBar::chunk** () const

Returns the frame representing the progress chunk.

**See also** setChunk().

----

.. _api_ProgressBar_d6bcae12:

 float **ProgressBar::from** () const

Returns the minimum value of the progress range.

**See also** setFrom().

----

.. _api_ProgressBar_972ac856:

 :ref:`Vector4<api_Vector4>`  **ProgressBar::progressColor** () const

Returns the color of the progress indicator.

**See also** setProgressColor().

----

.. _api_ProgressBar_70f23ad8:

 void **ProgressBar::setChunk** (:ref:`Frame<api_Frame>` * *frame*)

Sets the *frame* representing the progress chunk.

**See also** chunk().

----

.. _api_ProgressBar_0c947b13:

 void **ProgressBar::setFrom** (float  *value*)

Sets the minimum *value* of the progress range.

**See also** from().

----

.. _api_ProgressBar_957a4c10:

 void **ProgressBar::setProgressColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the progress indicator.

**See also** progressColor().

----

.. _api_ProgressBar_c4b19e32:

 void **ProgressBar::setTo** (float  *value*)

Sets the maximum *value* of the progress range.

**See also** to().

----

.. _api_ProgressBar_3c17db46:

 void **ProgressBar::setValue** (float  *value*)

Sets the current progress value.

**See also** value().

----

.. _api_ProgressBar_25e180f4:

 float **ProgressBar::to** () const

Returns the maximum value of the progress range.

**See also** setTo().

----

.. _api_ProgressBar_68d295f4:

 float **ProgressBar::value** () const

Returns the current progress value.

**See also** setValue().


