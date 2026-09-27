.. _api_ProgressBar:

ProgressBar
===========

Inherited: :ref:`Frame<api_Frame>`

.. _api_ProgressBar_description:

Description
-----------

The ProgressBar class is designed to provide a graphical representation of progress with customizable appearance and range. It supports features such as setting the minimum and maximum values, adjusting the progress value, and specifying visual elements for background and progress indicator.



.. _api_ProgressBar_public:

Public Methods
--------------

+------------------------------+--------------------------------------------------------------------------+
|                        float | :ref:`from<api_ProgressBar_e62f947b>` () const                           |
+------------------------------+--------------------------------------------------------------------------+
|                          int | :ref:`orientation<api_ProgressBar_dfa65928>` () const                    |
+------------------------------+--------------------------------------------------------------------------+
|  :ref:`Vector4<api_Vector4>` | :ref:`progressColor<api_ProgressBar_a158d42b>` () const                  |
+------------------------------+--------------------------------------------------------------------------+
|  :ref:`Sprite<api_Sprite>` * | :ref:`progressImage<api_ProgressBar_1edfb894>` () const                  |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setFrom<api_ProgressBar_26c7bfae>` (float  value)                  |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setOrientation<api_ProgressBar_40eb58f9>` (int  orientation)       |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setProgressColor<api_ProgressBar_5013c74f>` (const Vector4  color) |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setProgressImage<api_ProgressBar_53a1d49e>` (Sprite * image)       |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setTo<api_ProgressBar_a72b1843>` (float  value)                    |
+------------------------------+--------------------------------------------------------------------------+
|                         void | :ref:`setValue<api_ProgressBar_e325018c>` (float  value)                 |
+------------------------------+--------------------------------------------------------------------------+
|                        float | :ref:`to<api_ProgressBar_f50ae624>` () const                             |
+------------------------------+--------------------------------------------------------------------------+
|                        float | :ref:`value<api_ProgressBar_f2bac58e>` () const                          |
+------------------------------+--------------------------------------------------------------------------+



.. _api_ProgressBar_static:

Static Methods
--------------

None

.. _api_ProgressBar_methods:

Methods Description
-------------------

.. _api_ProgressBar_e62f947b:

 float **ProgressBar::from** () const

Returns the minimum value of the progress range.

**See also** setFrom().

----

.. _api_ProgressBar_dfa65928:

 int **ProgressBar::orientation** () const

Returns the orientation of the progress bar.

**See also** setOrientation().

----

.. _api_ProgressBar_a158d42b:

 :ref:`Vector4<api_Vector4>`  **ProgressBar::progressColor** () const

Returns the color of the progress indicator.

**See also** setProgressColor().

----

.. _api_ProgressBar_1edfb894:

 :ref:`Sprite<api_Sprite>` * **ProgressBar::progressImage** () const

Returns progress image.

**See also** setProgressImage().

----

.. _api_ProgressBar_26c7bfae:

 void **ProgressBar::setFrom** (float  *value*)

Sets the minimum *value* of the progress range.

**See also** from().

----

.. _api_ProgressBar_40eb58f9:

 void **ProgressBar::setOrientation** (int  *orientation*)

Sets the *orientation* of the progress bar.

**See also** orientation().

----

.. _api_ProgressBar_5013c74f:

 void **ProgressBar::setProgressColor** (:ref:`Vector4<api_Vector4>`  *color*)

Sets the *color* of the progress indicator.

**See also** progressColor().

----

.. _api_ProgressBar_53a1d49e:

 void **ProgressBar::setProgressImage** (:ref:`Sprite<api_Sprite>` * *image*)

Sets progress image.

**See also** progressImage().

----

.. _api_ProgressBar_a72b1843:

 void **ProgressBar::setTo** (float  *value*)

Sets the maximum *value* of the progress range.

**See also** to().

----

.. _api_ProgressBar_e325018c:

 void **ProgressBar::setValue** (float  *value*)

Sets the current progress value.

**See also** value().

----

.. _api_ProgressBar_f50ae624:

 float **ProgressBar::to** () const

Returns the maximum value of the progress range.

**See also** setTo().

----

.. _api_ProgressBar_f2bac58e:

 float **ProgressBar::value** () const

Returns the current progress value.

**See also** setValue().


